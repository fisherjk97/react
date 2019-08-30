import React from 'react';

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        title={isOn? 'Toggle Default': 'Toggle Dark Mode'}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;