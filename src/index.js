import React from 'react';
import ReactDOM from 'react-dom/client';
import { ExamplePlayer } from 'components/ExamplePlayer';
import { Reader } from 'components/Reader/Reader';
import publications from './publications.json';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExamplePlayer />
    <Reader items={publications} />
  </React.StrictMode>
);
