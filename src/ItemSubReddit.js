import React, {
    Component
} from 'react'

var Alert = require('react-bootstrap/lib/Alert');
var Tooltip = require('react-bootstrap/lib/Tooltip');

import  ItemSubRedditImage from './ItemSubRedditImage'

import './ItemSubReddit.css'

class ItemSubReddit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        try {
            let response = await fetch('https://www.reddit.com/r/playstation.json');
            let responseJson = await response.json();
            const posts = responseJson.data.children.map(obj => obj.data);
            this.setState({posts});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
          <div>
            {this.state.posts.map(post =>
                <Alert bsStyle="info" key={post.id}>
                  <ItemSubRedditImage image={post.thumbnail}/>
                  <strong>Topic: </strong>{post.title}
                  <div>
                    <Tooltip placement="bottom" className="in" id="tooltip-top">
                    {post.score}
                    </Tooltip>
                  </div>
                </Alert>
            )}
          </div>
        );
    }
}

export default ItemSubReddit
