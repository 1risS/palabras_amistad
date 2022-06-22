import React from "react";
import { db } from './firebase';
import { ref, runTransaction } from 'firebase/database';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('Escribiste: ' + this.state.value);
    const word = this.state.value.trim().toLowerCase()
    if (!word) return;
    event.preventDefault();
    var wordRef = ref(db, `words/${word}`);
    runTransaction(wordRef, function (freq) {
      return freq ? freq + 1 : 1;
    });
    this.setState({ value: '' })
  }

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <label>
          Escribí una palabra:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;