import React, {Component} from 'react'

import ArticleBody from './ArticleBody'
import Ad from './Ad'
import ClickBait from './ClickBait';
import ButtonPanel from './ButtonPanel';

class Main extends Component {
    render() {
        return (
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <ArticleBody />
            <ButtonPanel />
          </div>
          <aside className="large-4 medium-12 columns">
            <Ad />
          </aside>
          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <ClickBait />
          </div>
        </main>
        )
    }
}

export default Main