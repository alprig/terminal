import React from 'react';

import './Command.css';

const Command = ({ message: { text, user }, name }) => {

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (

        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyStart">
                    <p className="sentText pr-10">C/User/{trimmedName}:~$</p>
                    <div className="messageBox">
                        <p className="messageText colorDark">{text}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyEnd">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{text}</p>
                    </div>
                    <p className="sentText pl-10 ">{user}</p>
                </div>
            )
    );
}

export default Command;
