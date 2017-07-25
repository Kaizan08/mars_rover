import React, { Component } from 'react';

class ImageDisplay extends Component {
    render(){
        let imgStyle = {
            width: 500,
        }
        let nasaImages = this.props.images.map(image => {
        return(
            <div key={image.id}>
            <img src={image.img_src} style={imgStyle} alt="rover"/>
            </div>
        )}
        );
    return(
        <div>
            <p style={{fontSize:36, fontWeight:"bold"}}>{this.props.rover}</p>
            {nasaImages}
        </div>
    )}
}
export default ImageDisplay;