import React, { Component } from 'react';
import Book from '../Book/Book';


export default class BookList extends Component {
    static defaultProps = {
        books: []
    }

    render() {
        let { books } = this.props;
        if(books.length > 0) {
            return (
                <ul>
                    {books.map(bookDetails=><Book key={bookDetails.id} details={bookDetails} />)}
                </ul>
            )
        }
        if(books.length === 0) {
            return <h5>No books found :(</h5>
        }
    }
}
