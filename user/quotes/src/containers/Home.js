import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Quotes from '../componentes/Quotes';
import Search from '../componentes/Search';
import { fetch } from '../actions/random-quotes-actions';
import { handlerSearchAuthor, handlerAuthor } from '../actions/search-actions';

class Home extends Component {

  showQuotes(){
    if(!this.props.error){
      return (<Quotes quotes={this.props.quotes}/>);
    }
  }

  showLoading() {
    if(this.props.searching) {
      return <span>SEARCHING...</span>
    }
  }

  showSearchResult() {
    if(this.props.searched) {
      if(this.props.searchQuotes.length > 0) {
        return <Quotes quotes={this.props.searchQuotes} />
      } else {
        return <span>NO RESULTS</span>
      }
    }
  }

  render() {
    if(!this.props.fetched && !this.props.error){
      this.props.fetch(4);
    }

    return (
      <div>
        <h2>Search Quotes By Author</h2>
        <div className="search">
          <Search placeholder={"Search Author"}
                  onChange={this.props.handlerAuthor}
                  onKeyPress={this.props.handlerSearchAuthor}/>
          {this.showLoading()}
          {this.showSearchResult()}
        </div>

        <h2>Random Quotes</h2>
        {this.showQuotes()}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    fetching: state.random.fetching,
    fetched: state.random.fetched,
    quotes: state.random.quotes,
    error: state.random.error,
    searching: state.search.searching,
    searched: state.search.searched,
    author: state.search.author,
    searchQuotes: state.search.quotes,
    searchError: state.search.error,
  };
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    {
      fetch: fetch,
      handlerAuthor: handlerAuthor,
      handlerSearchAuthor: handlerSearchAuthor,
    }, dispach);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
