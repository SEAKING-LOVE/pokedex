


// import React from 'react';
// import ReactDOM from 'react-dom';


// import { Provider } from 'react-redux';
// import store from './store.js';

// import App from './app.jsx';
// import { IndexRoute, Router, Route, browserHistory } from 'react-router';
// // import Router from 'react-router';

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('app')
// );


import React  from 'react';
import ReactDOM from 'react-dom';

import store from './store.js';
import Root from './router.jsx';

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('app')
);