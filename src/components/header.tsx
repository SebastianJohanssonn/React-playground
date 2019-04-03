import React, {CSSProperties} from "react";

export default function Header(){
    return (
        <div style = {header}>
            <h1 style = {font}>React Playground</h1>
        </div>
    );
}

const header: CSSProperties = {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center"
}

const font: CSSProperties = {
    fontSize: "1.7em",
    cursor: "pointer",

}