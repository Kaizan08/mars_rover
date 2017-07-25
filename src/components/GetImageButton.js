import React, { Component } from 'react';

class GetImageButton extends Component {
    render(){
        return(
            <input type="button" value="Get Rover Image" onClick={this.props.onClick}/>
        )
    }
}
export default GetImageButton;