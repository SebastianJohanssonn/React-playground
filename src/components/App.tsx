import React, { Suspense, lazy, CSSProperties } from "React";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./errorBoundary";
import Modal from "./modal";
import {fullScreen, centeredContent, fullscreenAbsolute} from "../css";
import Spinner from "./spinner";

const Layout = lazy(() => import('./layout'));

interface State {
    isModalOpen: boolean
}
export default class App extends React.Component<{}, State>{
    state: State = {
        isModalOpen: false
    }
    private openModal = () => this.setState({ isModalOpen: true });
    private closeModal = () => this.setState({ isModalOpen: false });

    private get WelcomeScreen(){
        return (
            <div style={content}>
            {
                 this.state.isModalOpen ? (
                    <Modal persistent shouldClose={this.closeModal}>
                        <h3>Modal opened from <span style={highlighted}>hello</span> view</h3>
                        <button onClick={this.closeModal}>Close modal</button>
                    </Modal>  
                    ) :  
                    <Modal persistent shouldClose={this.openModal}>
                        <button onClick={this.openModal}>Open modal</button>
                    </Modal>

                 }
            </div>
            
        );
    }
    render() {
        return (
            <Suspense fallback={<Spinner/>}>
                <BrowserRouter>
                    <ErrorBoundary fallbackUI={<Spinner/>}>
                        {this.WelcomeScreen}
                        <Suspense fallback={"hi"}>
                            <Layout/>
                        </Suspense>
                    </ErrorBoundary>
                </BrowserRouter>
            </Suspense>
        )
    }
}

const highlighted: CSSProperties = {
    color: 'orange'
}
const content: CSSProperties = {
    zIndex: 10
}