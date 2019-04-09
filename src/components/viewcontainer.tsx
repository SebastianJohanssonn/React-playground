import React from "react";
import MainView from "./mainview";
import { View } from './layout';
interface Props{
    clickMain: (view:View) => void;
}

export default function view(props:Props){
    return (
        <MainView onSectionClick={props.clickMain}/>
    )
}