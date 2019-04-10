import React, { Suspense, lazy } from "React";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./spinner";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default function App(){
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}
