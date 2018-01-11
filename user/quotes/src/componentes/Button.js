import React, { Component } from 'react';

export default class Button extends Component {

  handler() {
    this.props.onClick();
  }

  render() {
    return (
      <div>
          <div className="control">
              <button className="button is-primary"
                      onClick={this.handler.bind(this)}>
                {this.props.label}
              </button>
          </div>
      </div>
    )
  }
};
