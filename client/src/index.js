import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Apollo Client initialization
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const APP_PORT = process.env.PORT;
console.log(APP_PORT);

const httpLink = createHttpLink({
  uri: `http://localhost:${APP_PORT}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("ROAR_CURRENT_USER");
  const newHeaders = {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
  return newHeaders;
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
