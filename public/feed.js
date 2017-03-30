import React from 'react'
import {Embed, Feed, Item, Icon, Image, Card} from 'semantic-ui-react'


class FeedItemVideo extends React.Component {

    render(){
        return(
            <Embed
                id='E8mjzRmQSN0'
                placeholder='images/board.jpg'
                source='youtube'
            />
        )
    }
}

class FeedItemCard extends React.Component {

    render() {
        return (
            <Card fluid={true} raised={true} color="black" style={{backgroundColor: "#FFFFFF"}}>
                <FeedItemVideo />
                <Card.Content>
                    <Card.Header>
                        Simmer Quantum 85lt
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            added in 3 days ago
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        Type: wave <br/>
                        Liters: 85lt <br/>
                        Size: 236x80cm <br/>
                        Conditions: Good <br/>
                        Price: 1800$ <br/>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='heart'/>
                        22 Likes
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

class FeedCustom extends React.Component {

    render() {
        return (
            <Feed>
                <FeedItemCard/>
                <FeedItemCard/>
                <FeedItemCard/>
                <FeedItemCard/>
            </Feed>
        )
    }
}

export default FeedCustom;