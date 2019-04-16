import React, { CSSProperties } from "react";
import { View } from "../layout";
import Modal from "../modal";


interface State {
    isModalOpen: boolean
}

interface Props {
    view: View
}

export default class HeaderSection extends React.Component<Props, State>{
    state: State = {
        isModalOpen: false
    }

    private openModal = () => this.setState({ isModalOpen: true });
    private closeModal = () => this.setState({ isModalOpen: false });
    render(){
        return (
            <div style={header}>
                <h1 style={headerItem}>{this.props.view}</h1>
                
                {
                this.state.isModalOpen ? (
                    <Modal persistent shouldClose={this.closeModal}>
                        <h3>Modal opened from <span style={highlighted}>{this.props.view}</span> view</h3>
                        <button onClick={this.closeModal}>Close modal</button>
                    </Modal>
                    ) : <button onClick={this.openModal} style={buttonStyle}>Open Modal</button>
                }
            </div>
            );
    }
}

const header: CSSProperties = {
    height: '4em',
    border: "2px solid black",
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0 1em',
    justifyContent: "space-between"
};

const headerItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    fontWeight: "lighter",
    textDecoration: "none",
    textShadow: "1px 4px 2px black",
    color: "white"
};

const highlighted: CSSProperties = {
    color: 'orange'
}

const buttonStyle: CSSProperties = {
    alignSelf: "center",
    height: "25px"
}
