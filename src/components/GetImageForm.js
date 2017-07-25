import React, { Component } from 'react';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';

const API_KEY = 'xxyZvPuf30XzABTEsUIlCnddZDfJq8ogCUcV9WSc';

class GetImageForm extends Component {
    constructor(){
        super();
        this.state = {
            rover: "Curiosity",
            camera: "FHAZ",
            images: [],
            sol: "",
        }
    };
    handleRover = (e) => {
        this.setState({rover: e.target.value})
    }
    handleCamera = (e) => {
        this.setState({camera: e.target.value})
    }
    handleSol = (e) => {
        this.setState({sol: e.target.value})
    }
    fetchRoverImage = () => {
        this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
        let cam = this.state.camera;
        let rove = this.state.rover;
        let num = this.state.sol;
        let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
        fetch(imageUrl).then(results => {
      return results.json();
    }).then(data => {
        let jackalope = data
      this.setState({images: jackalope.photos});
    })
    }

    render(){
        let labelStyle = {
            padding: 10,
            fontSize: 16,
        }
        let selectStyle = {
            fontSize: 24,
            color: "blue",
        }

    
        return(
            <div className="App">
            <label style={labelStyle} htmlFor="rover">Rover</label>
            <select style={{
            fontSize: 16,
            color: "blue",
        }} onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
            </select>
            <label style={labelStyle} htmlFor="camera">Camera Type</label>
            <select style={{
            fontSize: 16,
            color: "blue",
        }}onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label style={labelStyle} htmlFor="sol">Martian Sol: 1000-2000</label>
            <input style={{height: 14, marginLeft: 0, marginRight: 10}} type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
            <GetImageButton onClick={this.fetchRoverImage}/>
            <ImageDisplay images={this.state.images} rover={this.state.rover}/>
            </div>
        )
        }   
}
export default GetImageForm;