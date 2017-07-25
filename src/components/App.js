import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm.js';

class App extends Component {
  render() {
    return (
      <div>
        <GetImageForm />
      </div>
    );
  }
}
//https://api.nasa.gov/planetary/apod?api_key=xxyZvPuf30XzABTEsUIlCnddZDfJq8ogCUcV9WSc
export default App;
