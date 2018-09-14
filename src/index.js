import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Counters from './components/Counters';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counters />, document.getElementById('root'));
registerServiceWorker();
