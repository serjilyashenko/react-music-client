import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';
import Header from './components/Header';
import PlaylistPage from './containers/PlaylistPage';

render(
  (
    <div>
      <Header/>
      <PlaylistPage/>
    </div>
  ),
  document.getElementById('root'),
);
