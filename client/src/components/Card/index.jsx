import React from 'react'
import { Button,Card, Image, Label } from 'semantic-ui-react'
import img from '../../assets/camera1.jpg'
import _ from 'lodash'
import {RatingExampleStar,RatingMedium} from '../Ratings'
const CameraCard = () => {
    return(
        <Card href="/">
            <Label as='a' color="teal" corner='right' icon="heart"/>
            <Image src={img} />
            <Card.Content>
            <Card.Header>Canon EOS 70D</Card.Header>
            <Card.Meta>
                
            </Card.Meta>
            <Card.Description> ₹1500 per day </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Image src={img} avatar />
                    <span>  Owner </span>
            </a>
            </Card.Content>
        </Card>
    )
}

const CardContainer = (props) => {
    let times = props.times
    let card=[]
    _.times(times, ()=> {
        card.push(<CameraCard/>)
    })
    
    return(
        <div>
            <Card.Group itemsPerRow={6}>
                {card}
            </Card.Group>
        </div>
    )
}

const items = [
    {
      header: '18 Megapixel',
      description: 'APS-C sensor',
    //   meta: 'ROI: 30%',
    },
    {
      header: 'Scene Intelligent Auto',
      description: 'Simple point and shoot',
    //   meta: 'Intelligent Auto',
    },
    {
      header: '2.7" type',
      description:
        'LCD Screen',
    //   meta: 'ROI: 27%',
    },
  ]
  
const CardExampleGroupProps = () => <Card.Group items={items} />
  
const CardOwner = () => (
    <Card.Group>
    
      <Card>
        <Card.Content>
          <Image size='tiny' floated='right' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>Rajeev Khanna</Card.Header>
          <Card.Meta><RatingMedium/>  5.0</Card.Meta>
          <Card.Meta>Read Reviews(12)</Card.Meta>
          
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='blue'>
              Follow
            </Button>
          </div>
        </Card.Content>
      </Card>
  
    </Card.Group>
  )

export {
    CardContainer,
    CardExampleGroupProps,
    CardOwner
}

export default CardContainer