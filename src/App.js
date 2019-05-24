import React, { Component } from 'react';
import './App.css';
import BookList from './BookList/BookList';
import SearchForm from './SearchForm/SearchForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      booksArray: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchBoxChanged = this.handleSearchBoxChanged.bind(this);
  }

  bookSearch(searchTerm) {
    let query = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    console.log(`Search query is ${query}`);
    fetch(query)
    .then(function(response) {
      return response.json();
    })
    .then(function(booksJson) {
      // Create an array of 'book' objects
      let arr = booksJson.items.map(item => {
        // Not all books have all of the properties. We have to handle
        // cases where the book doesn't have a particular property
        let itemHasPrice = item.saleInfo.hasOwnProperty('listPrice');
        let price = itemHasPrice ? item.saleInfo.listPrice.amount : null;
        let itemHasAuthors = item.volumeInfo.hasOwnProperty('authors');
        let authors = itemHasAuthors ? item.volumeInfo.authors : null;
        // This return statement creates a book object
        return {
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          authors: authors,
          listPrice: price,
          infoLink: item.volumeInfo.infoLink,
          imgurl: item.volumeInfo.imageLinks.thumbnail,
          id: item.id,
        }
      });
      // Now we have an array of books!
      return arr;
    }).then(booksArray =>
      // Take this new array of books and set the App state
      this.setState({
        booksArray: booksArray
      })
    )
  }

  // If we want to do an action when the app loads,
  // include it in this componentDidMount block
  // componentDidMount() {
  //   this.bookSearch('design');
  // }
  
  // Whenever the user presses the Search button,
  // grab the searchTerm from state and use it
  // in bookSearch function's fetch query
  handleSubmit() {
    let trimmed = this.state.searchTerm.trim();
    if(trimmed.length > 0) {
      this.bookSearch(trimmed);
    }
  }
  
  // Whenever user changes text in the input field,
  // we will update the App's state...
  handleSearchBoxChanged(text) {
    this.setState({
      searchTerm: text
    })      
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Googly Book Search</h1>
        </header>
          <SearchForm 
            onSubmit={this.handleSubmit}
            searchBoxChanged={this.handleSearchBoxChanged}
            />
          <BookList books={this.state.booksArray} />
      </div>
    );
  }
}

