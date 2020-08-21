import React from 'react';
import CurrencyFormat from 'react-currency-format';

export const TextInput = ({ label, action, value, defaultValue, type, name, error, style }) => {
  return (
    <>
      <div
        className={error && error.input === name ? 'textInput textInputErrored' : 'textInput'}
        style={style}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type ? type : 'text'}
          onChange={action}
          defaultValue={defaultValue}
          id={name}
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
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={action}
        style={textAreaStyle}
        id={name}
        defaultValue={defaultValue}></textarea>
    </div>
    {error && error.input === name && <p className="textInputAlert">{error.text}</p>}
  </>
);
export const SelectInput = ({ action, name, options, error, style, selected }) => (
  <>
    <div
      className={error && error.input === name ? 'textInput textInputErrored' : 'textInput'}
      style={style}>
      <select onChange={action} onBlur={action} defaultValue={selected}>
        {options.map((item) => (
          <option value={item._id} key={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
    {error && error.input === name && <p className="textInputAlert">{error.text}</p>}
  </>
);
export const CheckBox = ({ label, title, action, name, checked, style }) => (
  <div className="textInput" style={style}>
    <label htmlFor={name}>{label}</label>
    <div className="checkbox">
      <input type="checkbox" onChange={action} id={name} checked={checked} />
      <label htmlFor={name}>{title}</label>
    </div>
  </div>
);
export const CurrencyInput = ({ label, action, value, name, error, style }) => (
  <>
    <div
      className={error && error.input === name ? 'textInput textInputErrored' : 'textInput'}
      style={style}>
      <label htmlFor={name}>{label}</label>
      <CurrencyFormat value={value} prefix={'R$'} suffix={',00'} onValueChange={action} />
    </div>
    {error && error.input === name && <p className="textInputAlert">{error.text}</p>}
  </>
);
