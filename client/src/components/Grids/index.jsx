import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import RatingMedium from '../../components/Ratings'
import HeadingGreen from '../Heading';

const GridExampleFloated = () => (
  <Grid>
    <Grid.Column floated='left' width={7}>
        Image Quality  <RatingMedium/>   5.0
    </Grid.Column>
    <Grid.Column floated='right' width={7}>
        Auto focus & lightining <RatingMedium/>   5.0
    </Grid.Column>
    <Grid.Column floated='left' width={7}>
        Performance  <RatingMedium/>   5.0
    </Grid.Column>
    <Grid.Column floated='right' width={7}>
        Features <RatingMedium/>   5.0
    </Grid.Column>
    <Grid.Column floated='left' width={7}>
        Design  <RatingMedium/>   5.0
    </Grid.Column>
  </Grid>
  
)

export default GridExampleFloated
