import React, { Component} from 'react';


export default class SearchForm extends Component {
  static defaultProps = {
      onSubmit: ()=>{},
      searchBoxChanged: ()=>{}
  }
 
  render() {
    return(
        <div className="searchBooks">
            <form className="searchBooksForm">
                <label htmlFor="search">Search: </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="peter rabbit"  // put value and onClick or whatever here
                    onChange={e => this.props.searchBoxChanged(e.target.value)}
                    >
                </input>
                <button type="submit"
                onClick={e => {
                    e.preventDefault();
                    this.props.onSubmit();
                }
                }>Search</button>

                <label htmlFor="printType">Print Type:</label>
                <select
                    id="printType"
                    name="printType">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
                </select>
                
                <label htmlFor="filter">Book Type:</label>
                <select
                    id="filter"
                    name="filter">
                <option value="partial">partial</option>
                <option value="full">Full</option>
                <option value="free">Free e-books</option>
                <option value="paid">Paid e-books</option>
                <option value="ebooks">Any e-books</option>
                </select>
            </form>
        </div>
    )
  }
}
