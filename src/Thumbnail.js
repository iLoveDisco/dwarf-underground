import React, { Component } from 'react'

class Thumbnail extends Component {
  alert () {
    alert(this.props.imgSrc)
  }
  render() {
    return (
      <a href="#">
        <img src= {this.props.imageSrc} alt= {this.props.altCaption} />
        <p>{this.props.caption}</p>
      </a>
    )
  }
}

export default Thumbnail