import React, { Suspense, lazy, CSSProperties } from "React";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./errorBoundary";
import Modal from "./modal";
import WelcomeScreen from "./welcomeScreen";
import Spinner from "./spinner";

const Layout = lazy(() => import('./layout'));

interface State {
    isModalOpen: boolean
}
export default class App extends React.Component<{}, State>{
    state: State = {
        isModalOpen: true
    }

    private closeModal = () => this.setState({ isModalOpen: false });

    private get WelcomeScreen(){
        return (
            <div style={content}>
            {
                this.state.isModalOpen ? (
                    <Modal persistent shouldClose={this.closeModal}>
                        <WelcomeScreen>
                            <h1 style={highlighted}>React Playground</h1>
                            <button onClick={this.closeModal} style={button}>Enter</button>
                        </WelcomeScreen>
                    </Modal>
                ) : null
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
                        <Suspense fallback={<Spinner/>}>
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
const button = {
    opacity: 1.5,
    backgroundColor: "black",
    borderRadius: "10px",
    border: "3px solid orange",
    color: "white"   
}