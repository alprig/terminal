import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Join.css';

const JoinOuterContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    background-color: #811141;
`

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <JoinOuterContainer>
            <div>
                <h1 className="heading">Join to terminal</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/>
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/terminal?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </JoinOuterContainer>

    );
};

export default Join;
