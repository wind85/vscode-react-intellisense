import React, {Component} from 'react'
import {Menu, Image, Input, Select, Icon, Button} from 'semantic-ui-react'
import SidebarRight from './sidebar.js'

const options = [
  { key: 'everything', text: 'Everything', value: 'everything' },
  { key: 'sails', text: 'sails', value: 'sails' },
  { key: 'boards', text: 'boards ', value: 'boards' },
  { key: 'misc', text: 'misc', value: 'miscellaneous' },
]

class CustomSearch extends Component {
  render(){
    return(
      <Input type="text" size='small' placeholder='Search...'>
        <input />
        <Button type='submit' primary>
          <Icon name="search" />
        </Button>
      </Input>
    )
  }
}

class MenuPublic extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Menu size='small'>
        <Menu.Item
          name='Logo'
          active={activeItem === 'Logo'}
          onClick={this.handleItemClick}>
          Site Logo
        </Menu.Item>

        <Menu.Item>
            <CustomSearch />
        </Menu.Item>

        <Menu.Item
          name='UserAvatar'
          position="right"
          active={activeItem === 'UserAvatar'}
          onClick={this.handleItemClick}>
          User Avatar
        </Menu.Item>
      </Menu>
    )
  }
}

class MenuPrivate extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Menu widths={3} size='small' inverted style={{"fontSize": 22}}>
        <Menu.Item
          name='Logo'
          active={activeItem === 'Logo'}
          onClick={this.handleItemClick}>
          <Image src="images/waterdrop.png" avatar={true} />
          WaterAndBoards
        </Menu.Item>

        <Menu.Item>
            <CustomSearch />
        </Menu.Item>

        <Menu.Item
          name='UserAvatar'
          position="right"
          active={activeItem === 'UserAvatar'}
          onClick={this.handleItemClick}>
          <SidebarRight ref="sidebar" />
          <Button circular={true} color="black" onClick={() => this.refs.sidebar.toggleVisibility()} >
            <Image src="images/avatar.jpg" size="tiny" avatar={true}/>
          </Button>
        </Menu.Item>
      </Menu>
    )
  }
}

export {MenuPublic, MenuPrivate};