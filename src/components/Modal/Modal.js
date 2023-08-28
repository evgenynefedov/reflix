import React, { useState, useEffect } from 'react'
import './Modal.css';

export default function Modal({message, updateModalMessage}) {

    const handleCloseButton = () => {
        updateModalMessage(false)
    }

    return (
        <div className={message !== false ? "modal-container" : "modal-container modal-hidden"}>
            <div className="modal-box">
                {message}
                <div onClick={handleCloseButton} className="modal-close-button">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59 L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z"/></svg>
                </div>
            </div>
            
            <div onClick={handleCloseButton} className="modal-overlayer"></div>
        </div>
    );
}