import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Join from './components/Join/Join';
import Terminal from './components/Terminal/Terminal';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Join />} />
            <Route path="Terminal" element={<Terminal />} />
        </Routes>
    </BrowserRouter>
);

export default App;
