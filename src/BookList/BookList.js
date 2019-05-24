import React, { Component } from 'react';
import Book from '../Book/Book';


export default class BookList extends Component {
    static defaultProps = {
        books: []
    }

    render() {
        //console.log(this.props.books)
        return (
            <ul>
                <li>
                    {/* <Book /> */}
                </li>
            </ul>   
        )
    }
}
