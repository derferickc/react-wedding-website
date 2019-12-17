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
      isOpen: !this.state.isOpen
    })
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-none d-sm-block">
          <img src={this.props.tile.image} alt={this.props.tile.alt} key={this.props.tile.alt} onClick={this.handleShowDialog}/>

          { this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}>

              <div className="dialog-inner-wrapper">
                <button id="overlay-close-button" onClick={this.handleShowDialog}>x</button>

                <img
                  className="image"
                  src={this.props.tile.image}
                  onClick={this.handleCloseDialog}
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
