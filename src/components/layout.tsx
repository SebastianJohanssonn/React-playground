import React, {CSSProperties} from "react";
import Header from "./header";

export default function Layout(){
    return <div style = {{...flex}}>
        <Header/>
    </div>
}

const flex: CSSProperties = {
    display: "flex",
    height: "4em",
    background: "black",
    color: "#E1E1E1",
    alignItems: "stretch",
    padding: "0 1em"
}
