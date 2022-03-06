import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import main from 'store/reducers/main';
import { composeWithDevTools } from '@redux-devtools/extension';
import history from '../utils/history';

const middleware = [routerMiddleware(history), thunk];

const rootReducer = combineReducers({
  main,
  router: connectRouter(history),
});

const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(rootReducer, {}, enhancer);

export default store;
