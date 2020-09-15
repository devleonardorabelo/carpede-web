/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface Props {
  label: string;
  action: (e: any) => void;
  name: string;
  error?: {
    input: string;
    text: string;
  };
}

const TextArea: React.FC<Props> = ({ label, action, name, error }: Props) => (
  <>
    <div
      className={
        error && error.input === name
          ? 'textInput textInputErrored'
          : 'textInput'
      }
    >
      <label htmlFor={name}>{label}</label>
      <textarea onChange={action} id={name} />
    </div>
    {error && error.input === name && (
      <p className="textInputAlert">{error.text}</p>
    )}
  </>
);

TextArea.defaultProps = {
  error: {
    input: null,
    text: null,
  },
};

export default TextArea;
