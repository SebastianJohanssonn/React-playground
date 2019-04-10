import React, {CSSProperties} from "react";
import MainView from "./mainview";
import DetailView from "./detailView";
import { View } from './layout';
import { Route } from "react-router";


export default function view(){
    
        return (
            <div style={container}>
                <Route exact path="/" component={MainView}/>
                <Route path="/forest" render={() => <DetailView view="forest"/>}/>    
                <Route path="/sky" render={() => <DetailView view="sky"/>}/>
                <Route path="/desert" render={() => <DetailView view="desert"/>}/>
            </div>
        )
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    gridTemplateColumns: '50% 50%',
}