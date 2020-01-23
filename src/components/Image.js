import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  
  handleShowDialog = () => {
    this.setState({
      isOpen: true
    })

    this.props.parentdialog()
  };

  handleHideDialog = () => {
    this.setState({
      isOpen: false
    })

    this.props.parentdialog()
  };

  render() {
    return (
      <React.Fragment>
        <div className="image-tile d-none d-sm-block">
          <img src={this.props.tile.image} alt={this.props.tile.alt} key={this.props.tile.alt} onClick={this.handleShowDialog }/>

          { (this.state.isOpen ) && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.props.modalsOpen === 0
                ? this.handleShowDialog
                : this.handleHideDialog
              }>

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
