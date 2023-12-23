/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: Platform.OS === 'ios' ? 'http://localhost:4010/graphql':'http://10.0.2.2:4010/graphql',
    cache: new InMemoryCache()
  });

const CompleteApp = () => {
    return (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>

    );
}

AppRegistry.registerComponent(appName, () => CompleteApp);
