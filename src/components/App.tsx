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
                            <h1 style={highlighted}>Did you know that elephants can't jump?</h1>
                            <button onClick={this.closeModal}>I don't care</button>
                        </WelcomeScreen>
                    </Modal>
                ) :  null
            }
            </div>
            
        );
    }
    render() {
        return (
            <Suspense fallback={<Spinner/>}>
                <BrowserRouter>
                    <ErrorBoundary fallbackUI={<Spinner/>}>
                        
                        <Suspense fallback={this.WelcomeScreen}>
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