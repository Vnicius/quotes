import React, { Component } from 'react';

export default class TextArea extends Component {
  handler(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
        <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
            <textarea className="textarea"
                      onChange={this.handler.bind(this)}
                      placeholder={this.props.placeholder}
                      value={this.props.value || ""}></textarea>
            </div>
        </div>
    )
  }
};
