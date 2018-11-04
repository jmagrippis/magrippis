import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import 'reset-css'

import './resetButton.css'
import './index.css'
import { apolloClient } from './apolloClient'
import { App } from './components/App'
import * as serviceWorker from './serviceWorker'

const root = (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(root, document.getElementById('root'))

serviceWorker.unregister()
