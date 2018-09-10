import React from 'react'
import { Container,Header } from 'semantic-ui-react'
import ListExampleIcon, { ListForRatings } from '../../components/List'
import RatingExampleStar from '../../components/Ratings'
import {SearchBar,SearchBarReviews} from '../../components/Search'
import GridExampleFloated from '../Grids';
import ImageCircular from '../Image'
import Divider from '../Divider'

const ContainerExampleContainer = () => (
  <Container>
    <Header as='h2'>Description of the Product:</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
      link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
      enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
      Curabitur ullamcorper ultricies nisi.
    </p>
  </Container>
)

const ContainerForPackage = () => (
    <Container>
      <Header as='h2'>In The Package:</Header>
        <ListExampleIcon/>
    </Container>
  )


  
  const ContainerForReviews = () => (
    <Container>
      <Header as='h2'>8 Reviews on this Item:   <RatingExampleStar/>   4.4/5</Header>
      <p>
        <SearchBarReviews/>
        <GridExampleFloated/>
        <ListForRatings/>
      </p>
      
    </Container>
  )  

export{
    ContainerExampleContainer,
    ContainerForPackage,
    ContainerForReviews,
}
export default ContainerExampleContainer