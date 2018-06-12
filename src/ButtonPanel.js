import React, {Component} from 'react';
import CommentBox from './CommentBox';

class ButtonPanel extends Component {
    constructor (props) {
      super(props);
      this.state = {showBox: false};
    }
  
    toggleBox () {
      if (this.state.showBox) {
        this.state.showBox = false;
      } else {
        this.state.showBox = true;
      }
    }

    renderBox () {
        return (
          <CommentBox show = "display:none"/>
        )
    }

    render () {
        return (
            <div className="article-links">
              <a className="article-link" onClick = {this.toggleBox.bind(this)}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>

              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>

              {this.renderBox()}

            </div>
        )
    }
}

export default ButtonPanel;