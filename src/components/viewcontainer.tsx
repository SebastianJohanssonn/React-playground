import React, {CSSProperties, Suspense, lazy} from "react";
import { Route } from "react-router";
import Spinner from "./spinner";
import ErrorBoundary from "./errorBoundary";

const MainView = lazy(() => import('./mainview'));
const DetailView = lazy(() => import('./detailview'));

export default function View(){
    
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
    height: '100%',
    margin: '0.5em',
    gridTemplateColumns: '50% 50%',
}