import React, { CSSProperties } from "react";
import { View } from "./layout";
import Modal from "./modal";
import { fullscreenAbsolute, fullScreen, centeredContent } from '../css';

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
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute }}/>
            </div>
        );
    }
}

const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}