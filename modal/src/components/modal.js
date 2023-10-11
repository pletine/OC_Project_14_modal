import React from "react";
import "./modal.css";

export default function Modal({ show, children, onClose }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
          <button onClick={onClose} className="close-modal">
            CLOSE
          </button>
        </div>
      </div>
    );
}