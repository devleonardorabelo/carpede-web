import React from 'react';

export const TextInput = ({ label, action, value, type, name, error }) => {
  return (
    <>
      <div className={error && error.input === name ? 'textInput textInputErrored' : 'textInput'}>
        <label>{label}</label>
        <input type={type ? type : 'text'} onChange={action} value={value} />
      </div>
      {error && error.input === name && <p className="textInputAlert">{error.text}</p>}
    </>
  );
};
export const TextArea = ({ label, action, error }) => (
  <>
    <div className="textInput">
      <label htmlFor={label}>{label}</label>
      <textarea onChange={action}></textarea>
    </div>
    <p className="textInputAlert">{error}</p>
  </>
);
