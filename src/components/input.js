import React from 'react';

export const TextInput = ({ label, action, value, defaultValue, type, name, error, style }) => {
  return (
    <>
      <div
        className={error && error.input === name ? 'textInput textInputErrored' : 'textInput'}
        style={style}>
        <label>{label}</label>
        <input
          type={type ? type : 'text'}
          onChange={action}
          value={value}
          defaultValue={defaultValue}
        />
      </div>
      {error && error.input === name && <p className="textInputAlert">{error.text}</p>}
    </>
  );
};
export const TextArea = ({ label, action, name, defaultValue, error, style, textAreaStyle }) => (
  <>
    <div
      className={error && error.input === name ? 'textInput textInputErrored' : 'textInput'}
      style={style}>
      <label htmlFor={label}>{label}</label>
      <textarea onChange={action} style={textAreaStyle}>
        {defaultValue}
      </textarea>
    </div>
    <p className="textInputAlert">{error}</p>
  </>
);
export const Select = ({ label, action, name, options, error, style }) => (
  <>
    <div
      className={error && error.input === name ? 'textInput textInputErrored' : 'textInput'}
      style={style}>
      <label htmlFor={label}>{label}</label>

      <select>
        {options.map((item) => (
          <button className="options" key={item._id}>
            {item.name}
          </button>
        ))}
      </select>
    </div>
    <p className="textInputAlert">{error}</p>
  </>
);
