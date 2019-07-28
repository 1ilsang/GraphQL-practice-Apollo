import React from 'react';
import {ApolloProvider} from 'react-apollo';
import apolloClient from  './apolloClient';

function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <div className="App" />
      </ApolloProvider>
  );
}

export default App;
