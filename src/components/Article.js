import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Article extends Component{
 constructor(props){
     super(props);
     this.state = {
         isOpen: props.defaultOpen
     }
 }
shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen
 }

    componentWillReceiveProps(nextProps) {
     if (nextProps.defaultOpen !== this.props.defaultOpen)
         this.setState({
             isOpen: nextProps.defaultOpen
         })
 }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>

        return (
            <div className="card mx-auto" style={{widht: '50%'}}>
                <div className="card-header">
                    <h2>
                        <a href=""> <Link to={`/${article.id}`}>{article.title}</Link></a>
                            <button onClick={this.handleClick.bind(this)} className="btn btn-primary btn-lg float-right">
                                 {this.state.isOpen ? 'Close' : 'Open'}
                            </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                 {body}
                </div>
            </div>

        )
    }
    handleClick() {
        return () => {
            console.log('---', 'clicked');
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
}

export default Article