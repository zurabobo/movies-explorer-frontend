import React from 'react';

import './MoreButton.css';

function MoreButton({ onClick }) {
  return (
    <div className="more-btn__container">
      <button className="more-btn" type="button" onClick={onClick}>Ещё</button>
    </div>
  )
}

export default MoreButton;
