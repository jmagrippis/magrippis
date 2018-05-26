import React, { PureComponent } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import theme from './theme'

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Home />
      </MuiThemeProvider>
    )
  }
}

export default App
