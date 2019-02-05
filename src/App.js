import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    length: 0,
    string: ""
  };

  countCharactersHandler = (event) => {

    const string = event.target.value;
    const count = string.length;

    this.setState({length: count});
    this.setState({string: string});

  }

  deleteCharacterHandler = (characterIndex) => {
    const stringArray = [...this.state.string];
    stringArray.splice(characterIndex, 1);
    const string = stringArray.join('');
    this.setState({string: string});
  }

  render() {

    let char = null;

    if (this.state.string !== "") {

      const stringArray = [...this.state.string.split('')];

      char = (
        <div>
        {stringArray.map(
            (letter, index) => {
              return <Char
                character = {letter}
                click = {this.deleteCharacterHandler.bind(this, index)}
                key = {index}/>
            }
          )
        }
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text"
          onChange= {this.countCharactersHandler}
          value={this.state.string} />
        <p>{this.state.string}</p>
        <Validation
          length= {this.state.length} />
        {char}
      </div>
    );

  } // end of render


}// end of class

export default App;
