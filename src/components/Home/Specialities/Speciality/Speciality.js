import React, { PureComponent } from 'react'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import purple from 'material-ui/colors/purple'
import styled from 'styled-components'

const Aside = styled.aside`
  height: 100%;
  background-color: ${purple[500]};
  color: #ffffff
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`

class Speciality extends PureComponent {
  static iconStyle = { fontSize: '4rem' }
  render() {
    const { name, description, icon } = this.props
    return (
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography variant="title">{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={9}>
              {description.split(/\r?\n/).map((paragraph, i) => (
                <Typography
                  key={i}
                  component="p"
                  variant="subheading"
                  paragraph
                >
                  {paragraph}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Aside>
                <Icon color="inherit" style={Speciality.iconStyle}>
                  {icon}
                </Icon>
              </Aside>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default Speciality
