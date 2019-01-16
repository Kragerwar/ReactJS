import ArticleList from './ArticleList'
import React, {Component} from 'react';
import articles from '../fixture'
import 'bootstrap/dist/css/bootstrap.css'

class Appp extends Component {
    state = {
        reverted: false
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        Appp name
                        <button className="bnt btn-primary btn-lg float-right" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default Appp