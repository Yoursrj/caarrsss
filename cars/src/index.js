import 'bulma/css/bulma.css';
import './styles.css';  
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const el = document.getElementById('root');
const root = createRoot(el);
//Then I'm going to wrap my app components with that provider And going to pass in the store prop like so that's it
root.render (<Provider store={store}><App/></Provider> );

