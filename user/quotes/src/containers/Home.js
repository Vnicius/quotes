import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Quotes from '../componentes/Quotes'
import { fetch } from '../actions/random-quotes-actions'

class Home extends Component {

  showQuotes(){
    if(!this.props.error){
      return (<Quotes quotes={this.props.quotes}/>);
    }
  }

  render() {
    if(!this.props.fetched && !this.props.error){
      this.props.fetch(4);
    }
    //#console.log(this.props.quotes);
    return (
      <div>
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
    error: state.random.error
  };
}

function mapDispatchToProps(dispach) {
  return bindActionCreators({fetch: fetch}, dispach);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
