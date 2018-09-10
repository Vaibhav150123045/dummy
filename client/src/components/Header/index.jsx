import React, { Component } from 'react'
import { Menu, Segment, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchBar from '../Search'
import currentUser from '../../queries/getCurrentUser'
import { graphql } from 'react-apollo'
import logo from '../../assets/logo.svg'
class AppBar extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    localStorage.removeItem('lenshood-token')
  }



  render() {
    return (
      <Segment >
        <Menu secondary >
        <Menu.Item>
          <Link to="/">
          <Image src={logo}/>
          </Link>
        </Menu.Item>
        <Menu.Item>
        <SearchBar/>
        </Menu.Item>
          <Menu.Menu position="right">
          <Menu.Item>
           <Link to="/blog">Blog</Link> 
        </Menu.Item>
        <Menu.Item>
        <Link to="/faq"> FAQ  </Link>
        </Menu.Item>
            <Menu.Item>
              <Link to="/login">
              <Button primary onClick={this.handleClick}>Logout</Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default graphql(currentUser)(AppBar)