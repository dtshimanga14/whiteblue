import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Switch,Route, Routes, Redirect } from 'react-router-dom';

import './index.css';
import App from './App';
import Material from "./Material";
import Transcript from "./Transcript";
import Payment from "./Payment";
import Editor from "./Editor";
import Bookmarked from "./Bookmarked";
import Resume from "./Resume";
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <Routes>
      <Route  path="/" exact element ={<App />} />
      <Route path="/materials" element={<Material />} />
      <Route path="/transcript" element={<Transcript />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/bookmarked" element={<Bookmarked />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
