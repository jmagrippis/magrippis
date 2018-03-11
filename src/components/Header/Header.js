import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import HomeIcon from 'material-ui-icons/Home'
import styled from 'styled-components'

const Title = styled(Typography)`
  flex: 1;
`

class Header extends PureComponent {
  state = { title: Header.getTitle() }

  static getTitle() {
    return window.innerWidth > 600 ? 'Johnny Magrippis' : 'jmagrippis'
  }

  onWindowResize = () => {
    const { title: prevTitle } = this.state
    const title = Header.getTitle()

    if (prevTitle !== title) {
      this.setState({ title })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  render() {
    const { title } = this.state

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Title component="h1" variant="title" color="inherit">
              {title}
            </Title>
            <IconButton disabled color="inherit" aria-label="Home">
              <HomeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
