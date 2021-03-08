/* eslint-disable no-undef */
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import allReducers from "root/rootReducer";
import allSaga from "root/rootSaga";

export const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
  blacklist: [""],
};

const middlewares = [];
middlewares.push(routerMiddleware(history));
// middlewares.push(logger);
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const middleware = composeWithDevTools(applyMiddleware(...middlewares));
const persistedReducer = persistReducer(persistConfig, allReducers(history));

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
sagaMiddleware.run(allSaga);

export { store, persistor };
