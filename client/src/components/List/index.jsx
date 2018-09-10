import React from 'react'
import { Icon, List,Image, Divider } from 'semantic-ui-react'
import { ContainerExampleContainer } from '../Container';

const ListExampleIcon = () => (
  <List>
    <List.Item>
      <Icon color='green' name='arrow right' />
      <List.Content>
        <List.Header>Floated Icon</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon color='green' name='arrow right'/>
      <List.Content>
        <List.Header>Icon Alignment</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon color='green' name='arrow right' />
      <List.Content>
        <List.Header>Zoom Lens</List.Header>
      </List.Content>
    </List.Item>
  </List>
)


const ListForRatings = () => (
  <List relaxed='very'  size={'big'}>
    <List.Item fluid>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content fluid>
        <List.Header as='a'>Shree Bhargava Kumar</List.Header>
        <List.Description>
          {' '}
          <a>
            <b>Date</b>
          </a>{' '}
        </List.Description>
          Its small and light enough to take travelling with you, but it packs a mighty punch.
          This Full Frame DSLR from Nikon is considered a semi proffesional camera, but rest assured
          it canhandle all heavy lifting that's required on a proffesional shoot.
      </List.Content>
    </List.Item>
    <Divider/>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      <List.Content>
        <List.Header as='a'>Mukesh Babu</List.Header>
        <List.Description>
          {' '}
          <a>
            <b>Date</b>
          </a>{' '}
        </List.Description>
          Its small and light enough to take travelling with you, but it packs a mighty punch.
          This Full Frame DSLR from Nikon is considered a semi proffesional camera, but rest assured
          it canhandle all heavy lifting that's required on a proffesional shoot.
      </List.Content>
    </List.Item>
    <Divider/>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <List.Content>
        <List.Header as='a'>Ankit Jain</List.Header>
        <List.Description>
          {' '}
          <a>
            <b>Date</b>
          </a>{' '}
        </List.Description>
          Its small and light enough to take travelling with you, but it packs a mighty punch.
          This Full Frame DSLR from Nikon is considered a semi proffesional camera, but rest assured
          it canhandle all heavy lifting that's required on a proffesional shoot.
      </List.Content>
    </List.Item>
  </List>
)
export{
  ListExampleIcon,
  ListForRatings,
}
export default ListExampleIcon
