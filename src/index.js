import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './css/style.comp.css';
import './detectIE';
import './function';

render(<Router />, document.querySelector('#main'));
