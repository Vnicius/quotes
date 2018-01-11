import { combineReducers } from 'redux';
import top from './top-quotes-reducer';
import random from './random-quotes-reducer';
import form from './form-reducer';

export default combineReducers({
    top: top,
    random: random,
    form: form
});