import React from "react";
import "./modal.css";

export default function Modal(
  { 
    show, children, onClose, 
    classNameModal = "modal", classModalContent = "modal-content", 
    styleModal = {}, styleModalContent = {}
  }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className={classNameModal} onClick={onClose} style={styleModal}>
        <div className={classModalContent} onClick={(e) => e.stopPropagation()} style={styleModalContent}>
          {children}
          <button onClick={onClose} className="close-modal">
            CLOSE
          </button>
        </div>
      </div>
    );
}