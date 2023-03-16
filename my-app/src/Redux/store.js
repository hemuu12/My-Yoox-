import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  import { reducer as AppReducer } from "./Appreducer/Reducer";
  import thunk from "redux-thunk";
  
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;
  
  const rootReducer = combineReducers({ AppReducer });
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );