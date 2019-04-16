import React, { CSSProperties } from "react";
import { View } from "../layout";

interface Props {
    view: View
}

export default class ImageSection extends React.Component<Props>{
    private get imageSrc() {
        return `../assets/${this.props.view}.jpg`;
    }
    render(){
        return(
            <div style={divStyle}>
                <div style={imageContainer}>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                    <img src={this.imageSrc} style={imageStyle}/>
                </div>
            </div>
        )
    }
}

const divStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: "100%",
    gridTemplateColumns: '50% 50%',
    justifyContent: "center"
}

const imageContainer: CSSProperties = {
    position: 'relative',
    textAlign: "center",
    width: '100%',
    height: "100%",
}

const imageStyle: CSSProperties = {
    width: "15%",
    height: "40%",
    margin: "1em",
    objectFit: "cover",
    boxShadow: "5px 10px 5px"
}