import React, { Component } from 'react';
import axios from 'axios';

import Quote from '../componentes/Quote'
import './formquotes.css'

export default class FormQuote extends Component {
  constructor(){
    super();
    this.state = {
      text: "",
      author: "",
      source: "",
      loading: false,
      quote: null
    }
  }

  handleText(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleAuthor(event) {
    this.setState({
      author: event.target.value
    });
  }

  handleSource(event) {
    this.setState({
      source: event.target.value
    });
  }

  loadingState(value) {
    this.setState({
      loading: value
    });
  }

  handleSubmit(){
    if(this.state.text === "" ||
       this.state.author === "" ||
       this.state.source === ""){

      alert("Complete all fields!");
    }else{
      this.loadingState(true);
      
      axios.post('http://localhost:8888/api/quotes/submit', {
        text: this.state.text,
        author: this.state.author,
        source: this.state.source
      })
        .then((response) => {
          let id = response.data.data.id;
          this.loadingState(false);

          this.setState({
            quote: {
              text: this.state.text,
              author: this.state.author,
              source: this.state.source
            }
          });

        })
        .catch((err) =>{
          alert(err);
          this.loadingState(false);
        })
    }
  }

  loading(){
    if (this.state.loading) {
      return (
        <span>LOADING...</span>
      )
    }
  }

  showQuote() {
    if(this.state.quote) {
      return <Quote {...this.state.quote} />
    }
  }
  
  render() {
    return (
      <div>
        <div className="form-container">
          <div className="field">
            <label className="label">Text</label>
            <div className="control">
              <textarea className="textarea" onChange={this.handleText.bind(this)} placeholder="Text"></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Author</label>
            <div className="control">
              <input className="input" type="text" onChange={this.handleAuthor.bind(this)} placeholder="Author Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Source</label>
            <div className="control">
              <input className="input" type="text" onChange={this.handleSource.bind(this)} placeholder="Source"/>
            </div>
          </div>
          <div class="control">
            <button class="button is-primary" onClick={this.handleSubmit.bind(this)} >Submit</button>
          </div>
          <div>
            {this.loading()}
          </div>
          <div>
            {this.showQuote()}
          </div>
        </div>
      </div>
    )
  }
};
