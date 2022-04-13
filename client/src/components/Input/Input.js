import React, { useCallback } from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage, autoFocus }) => {

    return (
        <form className="form">
            <span className="text">C/User/:~$</span>
            <input
                className="input"
                type="text"
                ref={autoFocus}
                value={message}
                onChange={({target: {value}}) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />

        </form>
    )
};

export default Input;
