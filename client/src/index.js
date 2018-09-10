import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'semantic-ui-css/semantic.min.css'
import Routes from './routes';

const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql'
})
const cache = new InMemoryCache()
const client = new ApolloClient({
    link: httpLink,
    cache
})

const App =() => {
    return(
        <ApolloProvider client={client}>
            <Routes/>
        </ApolloProvider>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));

