import React from 'react'

const ToggleButton = () => {
  return (
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span id= "toggle-btn" className ="navbar-toggler-icon">|||</span>
    </button>
  );
}

export default ToggleButton
