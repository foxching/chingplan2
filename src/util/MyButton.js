import React, { useRef, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const MyButton = props => {
  const tip1 = useRef();

  useEffect(() => {
    const options = {
      inDuration: 300,
      outDuration: 250,
      exitDelay: 0,
      enterDelay: 250,
      transitionMovement: 10,
      position: "bottom",
      margin: 3
    };
    M.Tooltip.init(tip1.current, options);
  }, []);

  return (
    <div>
      <button
        ref={tip1}
        className={`tooltipped ${props.btnClassName}`}
        onClick={props.onClick}
        data-position="bottom"
        data-tooltip={props.tip}
        data-target={props.target}
      >
        {props.children}
      </button>
    </div>
  );
};

export default MyButton;
