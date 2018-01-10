import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Quotes from '../componentes/Quotes'
import { fetch } from '../actions/random-quotes-actions'

// const data = {
//     quotes: [
//                 {
//                     author: "Autor1",
//                     source: "Livro - Volume qualquer",
//                     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
//                 },
//                 {
//                     author: "Autor2",
//                     source: "Livro2 - Volume qualquer 2",
//                     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
//                 }
//             ]
// }

class Home extends Component {
  render() {
    if(!this.props.fetched){
      this.props.fetch(4);
    }

    console.log(this.props.quotes);
    return (
      <div>
        <h2>Random Quotes</h2>
        <Quotes quotes={this.props.quotes}/>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    fetching: state.random.fetching,
    fetched: state.random.fetched,
    quotes: state.random.quotes
  };
}

function mapDispatchToProps(dispach) {
  return bindActionCreators({fetch: fetch}, dispach);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
