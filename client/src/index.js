import React from 'react';
import ReactDOM from 'react-dom';
import styled, {createGlobalStyle} from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}
`

ReactDOM.render(
    <>
        <Global />
        <App />
    </>,
    document.getElementById('root'));
