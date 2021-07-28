import React from 'react';

import './MoreButton.css';

function MoreButton({ onClick, buttonTitle }) {
  return (
    <div className="more-btn__container">
      <button className="more-btn" type="button" onClick={onClick}>{buttonTitle}</button>
    </div>
  )
}

export default MoreButton;