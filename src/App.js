import React, { Component } from 'react';
import './App.css';
import BookList from './BookList/BookList';
import SearchForm from './SearchForm/SearchForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArray: [],
    };
    //this.
  }

  componentDidMount() {
    this.bookSearch('donuts');
  }

  bookSearch(searchTerm) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(booksJson) {
      let arr = booksJson.items.map(item => {
        return {
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          authors: item.volumeInfo.authors,
          listprice: item.saleInfo.listPrice,
          imgurl: item.volumeInfo.imageLinks.smallThumbnail,
        }
      });
      return arr;
    })
    // this.setState({
    //   booksArray: booksArray
    // })
    // console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Googly Book Search</h1>
        </header>
          <SearchForm />
          <BookList books={this.state.booksArray} />
      </div>
    );
  }
}

