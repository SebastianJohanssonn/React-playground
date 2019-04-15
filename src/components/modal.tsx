import React from "react";
import ReactDOM from "react-dom";
import {View} from "./layout";
import { fullScreen, centeredContent} from "../css";

interface Props{
    
}

export default class Modal extends React.Component<Props>{
    element: HTMLDivElement;
    constructor(props: Props){
        super(props);
        this.element = document.createElement("div");
        this.element.id = "modalRoot";
    }
    componentDidMount(){
        document.body.appendChild(this.element);
    }

    componentWillUnmount(){
        document.body.removeChild(this.element);
    }

    render(){
        return ReactDOM.createPortal(
            this.props.children,
            this.element
        )
    }
}