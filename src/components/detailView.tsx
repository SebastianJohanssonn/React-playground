import React, { CSSProperties } from "react";
import { View } from "./layout";

interface Props{
    view: View
}

export default function DetailView(props:Props){
    const imageSrc = `../assets/${props.view}.jpg`;
    
    return (
        <div style={divStyle}>
            <img src={imageSrc} style={imageStyle}/>
            <h1 style={centeredAbsolute}>{props.view}</h1>
        </div>
    )
}

const divStyle: CSSProperties = {
    flexGrow: 1,
    background: '#808080'
}

const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: 'cover'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}