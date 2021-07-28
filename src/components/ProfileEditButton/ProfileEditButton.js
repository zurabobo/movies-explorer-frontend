import React from 'react';
import accountLink from '../../images/account-link.svg';

import './ProfileEditButton.css';


function ProfileEditButton({ onClick }) {

  return (
    <img alt="account-icon" className="profile__account-link" src={accountLink} onClick={onClick} />
  )
}

export default ProfileEditButton;
