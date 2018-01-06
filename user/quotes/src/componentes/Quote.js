import React, { Component } from 'react';

import './quote.css';

export default class Quote extends Component {
  render() {
    return (
      <div>
        <div className="box quote">
            <article className="media">
                {/* <div className="media-left">
                <figure className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                </figure>
                </div> */}
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.author}</strong> - <small>{this.props.source}</small>
                    <br/>
                        {this.props.text}
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                    <a className="level-item">
                        <span className="icon is-small"><i className="fa fa-reply"></i></span>
                    </a>
                    <a className="level-item">
                        <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                    </a>
                    <a className="level-item">
                        <span className="icon is-small"><i className="fa fa-heart"></i></span>
                    </a>
                    </div>
                </nav>
                </div>
            </article>
        </div>
      </div>
    )
  }
};
