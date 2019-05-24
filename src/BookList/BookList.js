import React, { Component } from 'react';
import Book from '../Book/Book';


export default class BookList extends Component {
    static defaultProps = {
        books: []
    }

    render() {
        return (
            <ul>
                <li>
                    <Book />
                </li>
            </ul>   
        )
    }
}
