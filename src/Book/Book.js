import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
    static defaultProps = {
        details: {
            title: 'title',
            subtitle: 'this is the subtitle',
            authors: ['Author 1', 'Author 2'],
            listPrice: null,
            infoLink: '#',
            imgurl: 'https://placekitten.com/g/100/160'
        }
    }

    displayPrice() {
        if(this.props.details.listPrice) {
            return `$${this.props.details.listPrice}`;
            // The first $ sign here is part of the formatted price.
            // The second second $ sign creates our template literal.
        } else {
            return 'N/A';
        }
    }

    displayAuthors() {
        if(this.props.details.authors) {
            // Comma-separated string of author names
            return `by ${this.props.details.authors.join(', ')}`
        } else {
            // Show some info if authors is null
            return 'Author Unknown';
        }
    }


    render() {
        return (
            <article className='book-item'>
                <div className="thumbnail-cont">
                    <a target="_blank" rel="noopener noreferrer" href={this.props.details.infoLink}><img src={this.props.details.imgurl} alt="additional information" /></a>
                </div>
                <div className="book-text">
                    <h3>{this.props.details.title}</h3>
                    <h4>{this.props.details.subtitle}</h4>
                    <p>{this.displayAuthors()}</p>
                    <p>{this.displayPrice()}</p>
                </div>
            </article>
        )
    }
}
