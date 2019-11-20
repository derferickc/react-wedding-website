import React, { Component } from "react";

class ImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  
  handleShowDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <div className="d-none d-sm-block">
          <img src={this.props.tile.image} alt={this.props.tile.alt} key={this.props.tile.alt} onClick={this.handleShowDialog}/>

          { this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}>

              <img
                className="image"
                src={this.props.tile.image}
                onClick={this.handleShowDialog}
                alt={this.props.tile.alt}
              />

            </dialog>
          )}
        </div>

        <div className="d-block d-sm-none">
          <img src={this.props.tile.image} alt={this.props.tile.alt} key={this.props.tile.alt}/>
        </div>
      </div>
    );
  }
}

export default ImageComponent;
