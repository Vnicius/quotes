import React, { Component } from 'react';

import Quotes from '../componentes/Quotes'

const data = {
    quotes: [
                {
                    author: "Autor1",
                    source: "Livro - Volume qualquer",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                },
                {
                    author: "Autor2",
                    source: "Livro2 - Volume qualquer 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                }
            ]
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Random Quotes</h2>
        <Quotes quotes={data.quotes}/>
      </div>
    )
  }
};
