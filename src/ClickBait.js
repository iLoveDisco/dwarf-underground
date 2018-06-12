import React, { Component } from 'react'
import Thumbnail from './Thumbnail';

class ClickBait extends Component {
  constructor(props) {
    super(props);
    const articles = [{name: "Single Orcs in Indianapolis", imageSrc: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", alt: "orc"},
                    {name: "You won't believe what's under this mountain", imageSrc: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", alt: "mountain"},
                    {name: "Mine 20% more gold with this One Weird Trick", imageSrc: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg", alt: "gold"},
                    {name: "Surprise for Indiana Hobbits born before 1999", imageSrc: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", alt: "hobbit"}]
    this.state = {articles}
    }
  render() {
    return (
        <div>
        {this.state.articles.map( (article) => (
            <div className="small-6 medium-3 columns other-article">
            <Thumbnail caption = {article.name} 
                imageSrc = {article.imageSrc}
                altCaption = {article.alt}/>
            </div>
        ))}
        </div>
    )
  }
}

export default ClickBait;