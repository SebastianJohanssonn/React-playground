import React, { CSSProperties } from "react";
import { View } from "./layout";
import Modal from "./modal";
import { fullscreenAbsolute, fullScreen, centeredContent } from '../css';

interface Props {
    view: View
}
interface State {
    isModalOpen: boolean
}

export default class DetailView extends React.Component<Props, State> {

    state: State = {
        isModalOpen: false
    }

    private get imageSrc() {
        return `../assets/${this.props.view}.jpg`;
    }

    private openModal = () => this.setState({ isModalOpen: true });
    private closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div style={container}>
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute }}/>
                <div style={{ ...content, ...fullscreenAbsolute }}>
                    
                    <div style={{ ...fullScreen, ...centeredContent }}>
                        <button onClick={this.openModal}>Open Modal</button>
                    </div>

                </div>
                {
                    this.state.isModalOpen ? (
                        <Modal persistent shouldClose={this.closeModal}>
                            <h3>Modal opened from <span style={highlighted}>{this.props.view}</span> view</h3>
                            <button onClick={this.closeModal}>Close modal</button>
                        </Modal>
                    ) : null
                }
            </div>
        );
    }
}
const highlighted: CSSProperties = {
    color: 'orange'
}
const content: CSSProperties = {
    zIndex: 10
}
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}