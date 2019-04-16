import React, { CSSProperties } from "react";
import { View } from "../layout";
import { fullscreenAbsolute, fullScreen, centeredContent } from '../../css';
import HeaderSection from "./headerSection";
import TextSection from "./textSection";
import ImageSection from "./imageSection"

interface Props {
    view: View
}


export default class DetailView extends React.Component<Props> {
    
    private get imageSrc() {
        return `../assets/${this.props.view}.jpg`;
    }

    

    render() {
        return (
            <div style={container}>
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute, ...transparancy }}/>
                <div style={stylingContent}>
                    <div style={margin}>
                        <HeaderSection view={this.props.view}/>
                        <TextSection view={this.props.view}/>
                        <ImageSection view={this.props.view}/>
                    </div>
                </div>
            </div>
        );
    }
}
    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: "flex"
}
const margin: CSSProperties = {
    margin: "10px",
    flexGrow: 1,
    
}
const stylingContent: CSSProperties = {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "100%",
    overflowY: 'auto',

}

const transparancy: CSSProperties = {
    opacity: 0.4
}