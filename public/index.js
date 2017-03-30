import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Menu} from 'semantic-ui-react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {MenuPublic, MenuPrivate} from './menu.js'
import CustomGrid from './geargrid.js'

var MainComponent = React.createClass({
  render: function () {
    return <Container fluid>
      <MenuPrivate/>
      <CustomGrid/>
    </Container>
  }
})

ReactDOM.render(
  <MainComponent/>, document.getElementById('content'))
