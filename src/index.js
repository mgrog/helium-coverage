import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// eslint-disable-next-line
import HeliumWidget from './widget';

ReactDOM.render(<App {...window.xprops} />, document.getElementById('root'));