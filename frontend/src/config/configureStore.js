import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import getBlocksReducer from '../reducers/getBlocksReducer'; 
import getBlockDetailsReducer from '../reducers/getBlockDetailsReducer'; 


const rootReducer = combineReducers ({
    blocks: getBlocksReducer,
    blockSelected: getBlockDetailsReducer
  })
  
  export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
  }