import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {
  handlerChange(event) {
      this.props.onChange(event.target.value);
  }

  handlerKey(event) {
      if(event.key == 'Enter') {
        this.props.onKeyPress(event.target.value);
      }
  }
  
  render() {
    return (
      <div>
        <div className="control has-icons-left">
            <input className="input"
                   type="search"
                   placeholder={this.props.placeholder}
                   onChange={this.handlerChange.bind(this)}
                   onKeyPress={this.handlerKey.bind(this)}
                   />
            <span className="icon is-small is-left">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
        </div>
      </div>
    )
  }
};
