import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Toolbar from 'material-ui/Toolbar'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import BusinessCenterIcon from 'material-ui-icons/BusinessCenter'
import CreateIcon from 'material-ui-icons/Create'
import FavoriteIcon from 'material-ui-icons/Favorite'
import SchoolIcon from 'material-ui-icons/School'
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
            <Tooltip title="CV">
              <IconButton color="inherit" aria-label="CV">
                <SchoolIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="portfolio">
              <IconButton color="inherit" aria-label="Portfolio">
                <BusinessCenterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="hobbies">
              <IconButton color="inherit" aria-label="Hobbies">
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="blog">
              <IconButton color="inherit" aria-label="Blog">
                <CreateIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
