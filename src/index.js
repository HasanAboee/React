import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {FavoritesContextProviders} from './Store/favorites_context';
ReactDOM.render(
  <FavoritesContextProviders>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesContextProviders>,
  document.getElementById('root')
);
