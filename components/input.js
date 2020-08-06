import React from 'react';

export const TextInput = ({ label, action }) => {
    return (
        <div className="textInput">
            <label>{label}</label>
            <input type="text" onChange={action} />
        </div>
    );
};
export const TextArea = ({ label, action }) => (
    <div className="textInput">
        <label htmlFor={label}>{label}</label>
        <textarea onChange={action}></textarea>
    </div>
);
