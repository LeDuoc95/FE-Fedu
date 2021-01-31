import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import allReducers from "root/rootReducer";
import allSaga from "root/rootSaga";

export const history = createBrowserHistory();

const middlewares = [];
middlewares.push(routerMiddleware(history));
middlewares.push(logger);
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const middleware = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(allReducers(history), middleware);
sagaMiddleware.run(allSaga);
export default store;
