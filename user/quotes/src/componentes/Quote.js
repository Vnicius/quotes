import React, { Component } from 'react';

import './quote.css';

export default class Quote extends Component {
  
  handlerLike() {
    this.props.onClickLike(this.props._id);
  }

  likeClass(){
      if(localStorage.getItem(this.props._id)) {
          return "fa fa-heart-o";
      }

      return "fa fa-heart";
  }

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
                            <span className="icon is-small icon-color">
                                <i className="fa fa-retweet"></i>
                            </span>
                            <span className="value">{this.props.shares}</span>
                        </a>
                        <a className="level-item" onClick={this.handlerLike.bind(this)}>
                            <span className="icon is-small icon-color">
                                <i className={(localStorage.getItem(this.props._id) 
                                                ? "fa fa-heart" 
                                                : "fa fa-heart-o")} ></i>
                            </span>
                            <span className="value">{this.props.likes}</span>
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
