import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middlewares)
)(createStore);

export const store = createStoreWithMiddleware(RootReducer);
