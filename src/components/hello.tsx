import * as React from "react";
import {centeredContent} from "../style";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 style = {centeredContent}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}