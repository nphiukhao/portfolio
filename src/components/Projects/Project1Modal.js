import React from "react";
import "./Modal.css";

export default function Project1Modal(props) {
  return (
    <div className="modal">
      <h3>MODAL IN PROGRES</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt
        corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis
        a sed impedit explicabo accusantium nihil doloremque consequuntur.
      </p>
      <button onClick={() => props.closeModal("showMProject1")}>close</button>
    </div>
  );
}
