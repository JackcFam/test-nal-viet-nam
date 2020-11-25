import React from "react";
import ScrollUpButton from "react-scroll-up-button";
function BackToTop(props) {
  return (
    <ScrollUpButton
      ShowAtPosition={850}
      ContainerClassName="back-to-top"
      TransitionClassName="back-to-top-trasition "
    >
      <div>
        <span className="btn-back-to-top">
          <i className="fas fa-long-arrow-alt-up"></i>
        </span>
      </div>
    </ScrollUpButton>
  );
}

export default BackToTop;
