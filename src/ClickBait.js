import React, { Component } from 'react'
import Thumbnail from './Thumbnail';

class ClickBait extends Component {
  render() {
    return ( 
        <div>
            <div className="small-6 medium-3 columns other-article">
            <Thumbnail caption = "Single Orcs in Indianapolis" 
                imageSrc = "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif"
                altCaption = "orc"/>
            </div>
            <div className="small-6 medium-3 columns other-article">
            <Thumbnail caption = "You won't believe what's under this mountain" 
                imageSrc = "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg"
                altCaption = "mountain"/>
            </div>
            <div className="small-6 medium-3 columns other-article">
            <Thumbnail caption = "Mine 20% more gold with this One Weird Trick" 
                imageSrc = "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg"
                altCaption = "gold"/>
            </div>
            <div className="small-6 medium-3 columns other-article">
            <Thumbnail caption = "Surprise for Indiana Hobbits born before 1999" 
                imageSrc = "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg"
                altCaption = "hobbit"/>
            </div>
        </div>
    )
  }
}

export default ClickBait