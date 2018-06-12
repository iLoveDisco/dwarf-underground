import React, {Component} from 'react';

class CommentBox extends Component {
    render () {
        return (
            <form style = {this.props.show}> 
                <input type = 'text'></input>
            </form>
        )
    }
}

export default CommentBox;