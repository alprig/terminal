import React, {useEffect, useState, useRef} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Terminal.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

const Terminal = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const autoFocus = useRef(null);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

       socket.emit('join', { name, room }, () => {

       });

       return () => {
           socket.emit('disconnect');

           socket.off();
       }
    }, [ENDPOINT , window.location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    const handleClick = () => {
        autoFocus.current.focus();
    };

    return (
        <div className="outerContainer">
            <div className="container" onClick={handleClick}>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} autoFocus={autoFocus}/>
            </div>
        </div>
    );
};

export default Terminal;
