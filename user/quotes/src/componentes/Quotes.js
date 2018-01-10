import React, { Component } from 'react';

import Quote from './Quote'

import './quotes.css'

export default class Quotes extends Component {
    fillQuotes(){
        return this.props.quotes.map((quote) => {
                return <Quote {...quote} key={quote._id}/>
                })
    }

    render() {
        return (
            <div className="quotes-container">
                {this.fillQuotes()}
            </div>
        )
    }
};
