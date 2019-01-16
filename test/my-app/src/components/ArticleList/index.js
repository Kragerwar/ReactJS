import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent{
    render() {
        const articleElement = this.props.articles.map((article, index) =>
            <li key={article.id} className="article-list-li">
                <Article article={article} defaultOpen={index === 0}/></li>
        )
        return (
            <ul>
                {articleElement}
            </ul>

        )
    }
}