import { combineReducers } from 'redux'; 

import countryRegionReducer from './countryRegionReducer' ;

export default combineReducers({ 

    event: countryRegionReducer 

}) 