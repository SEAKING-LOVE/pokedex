import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

import App from './app.container.jsx';
import configureStore from './store.js';

const store = configureStore();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
