import React from "React";
import Header from "./layout";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default function App(){
    return <Header/>;
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