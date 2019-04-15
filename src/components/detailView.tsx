import React, { CSSProperties } from "react";
import { View } from "./layout";
import Modal from "./modal";

interface Props {
    view: View
}

export default class DetailView extends React.Component<Props, {}>{
    state = {show: false}
    imageSrc = `../assets/${this.props.view}.jpg`;
    toggleModal = () => {
        this.setState({ show: !this.state.show })
    }
    private get renderModal() {
        if(this.state.show){
            return (
                <Modal>
                    <h1>Modal</h1>
                </Modal>
            )
        }
    }
    
    render(){
        return (
            <div style={divStyle}>
                <button onClick={this.toggleModal} style={centeredAbsolute}>Öppna</button>
                <img src={this.imageSrc} style={imageStyle}/>
                {this.renderModal}
            </div>
        )
    }
}

const divStyle: CSSProperties = {
    flexGrow: 1,
    background: '#808080'
}

const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: 'cover'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}