/**
 * Created by griga on 11/17/16.
 */

import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {routerReducer} from 'react-router-redux'

import {handleBodyClasses, dumpLayoutToStorage, layoutReducer} from '../components/layout'

import navigationReducer from '../components/navigation/navigationReducer'


export const rootReducer = combineReducers(
  {
    routing: routerReducer,
    layout: layoutReducer,
    navigation: navigationReducer
    
  }
);

const store =  createStore(rootReducer,
  applyMiddleware(
    thunk,
    handleBodyClasses,
    dumpLayoutToStorage
  )
);



export default store;