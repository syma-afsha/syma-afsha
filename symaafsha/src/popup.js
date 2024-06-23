import React, { useState, useEffect } from 'react';
import "./popup.css";


function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <button style={{fontSize:18}}className="close-btn" onClick={closePopup}><b> X </b></button>
          <p style={{marginTop:25, fontSize:14, marginLeft: 5}}><b>Thank you for visiting my page.</b></p>
        </div>
      )}
      </div>
  );
}

export default Popup;
