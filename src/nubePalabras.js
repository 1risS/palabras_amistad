import WordCloud from 'react-d3-cloud';
import { db } from './firebase';
import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';

function Nube() {
  const [words, setWords] = useState([])

  useEffect(() => {
    const wordsRef = ref(db, 'words/');
    onValue(wordsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data", data);
      const newData = Object.entries(data).map(([k, v]) => ({ text: k, value: v * 1000 }))
      console.log('leer: ', newData)
      setWords({ ...newData })
    });
  }, []);

  // const data = [
  //   { text: 'cooperación', value: 1000 },
  //   { text: 'complicidad', value: 200 },
  //   { text: 'honestidad', value: 800 },
  //   { text: 'calidez', value: 1000000 },
  //   { text: 'diversión', value: 1000 },
  // ];

  return (
    <WordCloud data={words} />
  )
}

export default Nube;