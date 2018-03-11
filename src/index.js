import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import 'reset-css'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import client from './apolloClient'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
