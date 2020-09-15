import React from 'react';

interface Props {
  label: string;
  action: () => void;
  type?: string;
  name: string;
  error?: {
    input: string;
    text: string;
  };
}

const TextInput: React.FC<Props> = ({
  label,
  action,
  type,
  name,
  error,
}: Props) => {
  return (
    <>
      <div
        className={
          error && error.input === name
            ? 'textInput textInputErrored'
            : 'textInput'
        }
      >
        <label htmlFor={name}>{label}</label>
        <input type={type || 'text'} onChange={action} id={name} />
      </div>
      {error && error.input === name && (
        <p className="textInputAlert">{error.text}</p>
      )}
    </>
  );
};

TextInput.defaultProps = {
  type: 'text',
  error: {
    input: null,
    text: null,
  },
};

export default TextInput;
