import React, {Component} from 'react'
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from 'semantic-ui-react'


class SidebarRight extends Component {
  state = {
    visible: false
  }

  toggleVisibility(){
    this.setState({visible: !this.state.visible});
  }

  render() {
    const {visible} = this.state
    return (
      <div ref="sidebar">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted>
            <Menu.Item name='user'>
              <Icon name='user'/>
              User Profile
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera'/>
              Add Item
            </Menu.Item>
            <Menu.Item name='settings'>
              <Icon name='settings'/>
              Settings
            </Menu.Item>

          </Sidebar>
          <Sidebar.Pusher></Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRight