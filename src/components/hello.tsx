import React from "React";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 style = {centeredContent}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

const centeredContent: React.CSSProperties = {
    width: '100%',
    height:'100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
}