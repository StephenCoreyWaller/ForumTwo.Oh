import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import App from './Components/App';
import reducers from './reducers';
import '../node_modules/semantic-ui-css/semantic.min.css';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Router>
		<Auth0ProviderWithHistory>
			<Provider store={store}>
				<App />
			</Provider>
		</Auth0ProviderWithHistory>
	</Router>,
	document.getElementById('root')
);
