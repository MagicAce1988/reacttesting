import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({
});

export const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middlewares)
)(createStore);

export const store = createStoreWithMiddleware(RootReducer);
