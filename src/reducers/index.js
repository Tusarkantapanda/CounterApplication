import counterReducer from './counter';
import secondCounter  from './secondCounter';
import thirdCounter  from './thirdCounter';
import fourthCounter  from './fourthCounter';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
        counter: counterReducer,
        secondCount: secondCounter,
        thirdCount: thirdCounter,
        fourthCount: fourthCounter
})

export default allReducers;