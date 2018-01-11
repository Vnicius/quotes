import React, { Component } from 'react';

import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import './form.css';

export default class Form extends Component {
    render() {
        return (
        <div>
            <div className="form-container">
                <TextArea label={"Text"}
                          placeholder={"Text"}
                          onChange={this.props.handlerText}
                          value={this.props.textValue}/>

                <Input label={"Author"} 
                       placeholder={"Author Name"}
                       onChange={this.props.handlerAuthor}
                       value={this.props.authorValue}/>
                
                <Input label={"Source"} 
                       placeholder={"Source"}
                       onChange={this.props.handlerSource}
                       value={this.props.sourceValue}/>

                <Button label={"Submit"}
                        onClick={this.props.handlerSubmit}/>
            </div>
        </div>
        )
    }
};
