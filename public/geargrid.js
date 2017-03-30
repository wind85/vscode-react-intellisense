import React, {Component} from 'react'
import {Grid, Image, Divider, Item} from 'semantic-ui-react'
import FeedCustom from './feed.js'

class CustomGrid extends Component {

    render() {
        return (
            <Grid columns={3} stackable={true} celled="internally" style={{backgroundColor: "#E9EBEE"}}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src='' size="medium"/>
                    </Grid.Column>
                    <Grid.Column>
                        <FeedCustom/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='' size="medium"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default CustomGrid;