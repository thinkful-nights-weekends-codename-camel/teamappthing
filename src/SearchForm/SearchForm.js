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
                <option value="None">All</option>
                </select>
                
                <label htmlFor="filter">Book Type:</label>
                <select
                    id="filter"
                    name="filter">
                <option value="None">No Filter</option>
                </select>
            </form>
        </div>
    )
  }
}
