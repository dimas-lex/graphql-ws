import React from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
 
 
const App = ({ data }) => { 
  console.log(data.message) 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Message from GraphQL Websocket backend 
         
        </p>
      </div>
    );  
}

export default graphql(gql`
  query Query {
    message
  }
`)(App);