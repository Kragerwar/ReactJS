import React, {Component} from 'react';
import ArticleList from './components/ArticleList'
import articles from './fixture'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reverted: false
        }
    }


    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="bnt btn-primary btn-lg float-right" onClick={this.revert.bind(this)}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert() {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App