import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './containers/App';
import Home from './containers/Home';
import FormQuote from './containers/FormQuote';
import TopQuotes from './containers/TopQuotes';

ReactDOM.render(
    (
        <BrowserRouter>
            <App>
                <Route exact path='/' component={Home} />
                <Route path='/form' component={FormQuote} />
                <Route path='/top' component={TopQuotes} />
            </App>
        </BrowserRouter>
    ),
    document.getElementById('root'));