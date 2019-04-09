import React from "react";
import MainView from "./mainview";
import DetailView from "./detailView";
import { View } from './layout';
interface Props{
    clickMain: (view:View) => void;
    view: View
}

export default function view(props:Props){
    if(props.view == "main"){
        return (
            <MainView onSectionClick={props.clickMain}/>
        )
    }
    return <DetailView view={props.view}/>
}