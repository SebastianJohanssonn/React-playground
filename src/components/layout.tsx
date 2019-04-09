import React, { CSSProperties, Props } from 'react';
import Header from './header';
//import Content from './mainview';
import View from './viewcontainer'
import { fullScreen } from '../css';

export type View = "main" | "forest" | "desert" | "sky";

interface State {
    view: View;
}

/** React function component */
export default class Layout extends React.Component<{}, State>{
    
    state: State = {
        view: "main"
    }

    private handleClick = () => {
        this.setState({
            view: "main"
        })
    }

    private handleViewClick = (view:View) => {
        this.setState({
            view
        })
    }
    render(){
        console.log(this.state.view)
        return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Header onclick = {this.handleClick}/>
                <View clickMain = {this.handleViewClick} view={this.state.view}/>
            </div>
        );
    }
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}