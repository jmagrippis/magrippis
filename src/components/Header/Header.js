import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Tooltip from 'material-ui/Tooltip'
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
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Title variant="title" color="inherit">
              Johnny Magrippis
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
