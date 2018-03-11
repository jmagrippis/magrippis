import React, { PureComponent } from 'react'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

class Speciality extends PureComponent {
  render() {
    const { name, description } = this.props

    return (
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title">{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component="p" variant="subheading">
            {description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default Speciality
