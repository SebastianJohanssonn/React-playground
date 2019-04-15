import React, { CSSProperties } from "react";
import {fullScreen, fullscreenAbsolute, centeredContent} from "../css";


export default class WelcomeScreen extends React.Component<{}>{

    render(){
        return(
            <div style={{...divStyle, ...centeredContent}}>
                {this.props.children}
            </div>
        );
    }
}

const divStyle: CSSProperties = {
    backgroundColor: "black",
    height: "100%",
    width: "100%"
}