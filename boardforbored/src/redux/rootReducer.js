import { combineReducers } from 'redux';

import cartreducer from './reducer';

const rootReducer = combineReducers({

    cartreducer: cartreducer,

});

export default rootReducer;