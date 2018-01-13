import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './app.css';
import logo from '../quotes-logo.png';

export default class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="">
            <img src={logo} 
                 alt="Bulma: a modern CSS framework based on Flexbox" 
                 width="112" height="28" />
            </a>
        </div>
        </nav>
        <div className={"tabs is-centered"}>
            <ul>
                <li><NavLink exact to="/" activeClassName={"is-active"}>Home</NavLink></li>
                <li><NavLink to='/form' activeClassName={"is-active"}>New Quote</NavLink></li>
                <li><NavLink to='/top' activeClassName={"is-active"}>Top Quotes</NavLink></li>
            </ul>
        </div>

        <section className={"container"}>
            {this.props.children}
        </section>
      </div>
    )
  }
};
