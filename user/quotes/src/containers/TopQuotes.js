import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetch, handlerLike } from '../actions/top-quotes-actions';
import Quotes from '../componentes/Quotes';

class TopQuotes extends Component {
  render() {
    if(!this.props.fetched){
      this.props.fetch(10);
    }

    return (
      <div>
        <h1>Top 10 Quotes</h1>
        <Quotes quotes={this.props.quotes} 
                onClickLike={this.props.handlerLike}/>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    fetching: state.top.fecthing,
    fetched: state.top.fetched,
    quotes: state.top.quotes
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
        fetch: fetch,
        handlerLike: handlerLike,
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(TopQuotes);