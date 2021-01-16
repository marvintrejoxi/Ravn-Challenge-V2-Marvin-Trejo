import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client';

// custom
import reportWebVitals from './reportWebVitals';
import {App} from './App';
import {client} from 'graphql/client';
import 'assets/sass/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
