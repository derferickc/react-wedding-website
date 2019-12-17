import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modalCount: 0
    };
  }
  
  handleShowDialog = () => {
    this.setState({
      isOpen: true,
      modalCount: this.state.modalCount + 1
    })

    this.props.parentdialog()
  };

  handleHideDialog = () => {
    this.setState({
      isOpen: false,
      modalCount: this.state.modalCount - 1
    })

    this.props.parentdialog()
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-none d-sm-block">
          <img src={this.props.tile.image} alt={this.props.tile.alt} key={this.props.tile.alt} onClick={!this.props.dialogisopen && this.handleShowDialog }/>

          { (this.state.isOpen && this.props.dialogisopen) && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleHideDialog}>

              <div className="dialog-inner-wrapper">
                <button id="overlay-close-button">x</button>

                <img
                  className="image"
                  src={this.props.tile.image}
                  alt={this.props.tile.alt}
                />
              </div>
            </dialog>
          )}
        </div>

        <div className="d-block d-sm-none">
          <img src={this.props.tile.image} alt={this.props.tile.alt} key={this.props.tile.alt}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Image;
