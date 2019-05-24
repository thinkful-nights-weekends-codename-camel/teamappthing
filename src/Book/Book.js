import React, { Component } from 'react';

export default class Book extends Component() {
    static defaultProps = {
        title: 'title',
        subtitle: '',
        authors: ['author1', 'author 2'],
        listprice: 1,
        imgurl: 'http.whatever'
    }

    render() {
        return (
            <div>
                {/* {this.props.title}
                {this.props.subtitle}
                {this.props.authors}
                {this.props.listprice}
                {this.props.imgurl} */}
            </div>   
        )
    }
}
