import React, {CSSProperties} from "react";
import {CircleLoader} from "react-spinners";
import {centeredContent, fullScreen} from "../css";

export default function() {
    return (
        <div style={{...centeredContent, ...fullScreen}}>
            <CircleLoader size={1.5} sizeUnit="em" color="white"/>
        </div>
    );
}

const appereance: CSSProperties = {
    color: "white",
    fontSize: "1.5em"   
}