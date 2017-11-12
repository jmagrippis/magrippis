import React, { PureComponent } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'

import Header from './components/Header/Header'
import theme from './theme'

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header key="header" />
        <main key="body">
          <p>You gotta start with a hello, world.</p>
        </main>
      </MuiThemeProvider>
    )
  }
}

export default App
