import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class MyButton extends Component {
  componentDidMount() {
    const options = {
      inDuration: 300,
      outDuration: 250,
      exitDelay: 0,
      enterDelay: 250,
      transitionMovement: 10,
      position: "bottom",
      margin: 3
    };
    M.Tooltip.init(this.Tooltip1, options);
  }

  render() {
    return (
      <div>
        <button
          ref={Tooltip => {
            this.Tooltip1 = Tooltip;
          }}
          className={`tooltipped ${this.props.btnClassName}`}
          onClick={this.props.onClick}
          data-position="bottom"
          data-tooltip={this.props.tip}
          data-target={this.props.target}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default MyButton;
