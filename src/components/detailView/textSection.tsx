import React, { CSSProperties } from "react";
import {View} from "../layout";

interface Props {
    view: View
}

export default class TextSection extends React.Component<Props>{
    render(){
        return(
            <p style={textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
        )
    }
}

const textStyle: CSSProperties = {
    textShadow: "1px 4px 2px black",
    color: "white"
}