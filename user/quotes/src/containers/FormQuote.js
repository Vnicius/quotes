import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Quote from '../componentes/Quote';
import Form from '../componentes/Form';
import Button from '../componentes/Button';
import { handlerText,
         handlerAuthor,
         handlerSource,
         handlerSubmit,
         handlerEdit,
         handlerFinish,
         handlerUpdate } from '../actions/form-actions';
import './formquote.css';

class FormQuote extends Component {

  submit() {
    if(this.props.submitted) {
      var quote = {
        text: this.props.text,
        author: this.props.author,
        source: this.props.source,
        _id: this.props._id,
        likes: 0,
        shares: 0,
      }
  
      this.props.handlerUpdate(quote);
    } else {
      this.props.handlerSubmit(
        {
          text: this.props.text,
          author: this.props.author,
          source: this.props.source,
        }
      )
    }
  }

  showForm() {
    if(!this.props.submitted || this.props.edit) {
      return (<Form handlerText={this.props.handlerText}
                    textValue={this.props.text}
                    handlerAuthor={this.props.handlerAuthor}
                    authorValue={this.props.author}
                    handlerSource={this.props.handlerSource}
                    sourceValue={this.props.source}
                    handlerSubmit={this.submit.bind(this)} />
             )
    }
  }

  showLoading() {
    if(this.props.submitting) {
      return (
        <span>LOADING...</span>
      );
    }
  }

  showQuote() {
    if(this.props.submitted){
      var quote = {
          text: this.props.text,
          author: this.props.author,
          source: this.props.source,
          _id: this.props._id,
          likes: 0,
          shares: 0,
        }

      return <Quote {...quote} />
    }
  }

  showEdit() {
    if(this.props.submitted && !this.props.edit) {
      return <Button className={"edit-button"}
                     label={"Edit"}
                     onClick={this.props.handlerEdit} />
    }
  }

  showFinish() {
    if(this.props.submitted) {
      return <Button label={"Finish"} 
                     onClick={this.props.handlerFinish}/>
    }
  }
  
  render() {
    return (
      <div>
        {this.showForm()}
        {this.showLoading()}
        {this.showQuote()}
        <div className="buttons">
          {this.showEdit()}
          {this.showFinish()}
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    text: state.form.text,
    author: state.form.author,
    source: state.form.source,
    submitted: state.form.submitted,
    submitting: state.form.submitting,
    _id: state.form._id,
    edit: state.form.edit,
    updating: state.form.updating,
    updated: state.form.updated,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      handlerText: handlerText,
      handlerAuthor: handlerAuthor,
      handlerSource: handlerSource,
      handlerSubmit: handlerSubmit,
      handlerEdit: handlerEdit,
      handlerFinish: handlerFinish,
      handlerUpdate: handlerUpdate,
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormQuote);