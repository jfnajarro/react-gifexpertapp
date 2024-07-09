import React from 'react';
import ReactDOM from 'react-dom';

import {createRoot} from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp';


import './index.css';

const container = document.getElementById('root')
const root = createRoot(container);
// root.render (<GiftExpertApp tab="home"/>);
root.render(
  <GiftExpertApp/>,
  document.getElementById('root')
);

