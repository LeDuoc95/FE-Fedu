// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createHashHistory } from "history";
// import { routerMiddleware } from "connected-react-router";

// // import logger from "redux-logger";
// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
// import createRootReducer from "reducers";

// // export const history = createBrowserHistory();
// export const history = createHashHistory({
//   hashType: "noslash",
//   getUserConfirmation: (message, callback) => callback(console.log("object")),
// });
// const middlewares = [];
// // middlewares.push(thunk);
// // middlewares.push(logger);
// middlewares.push(promise);
// middlewares.push(routerMiddleware(history));

// const middleware = composeWithDevTools(applyMiddleware(...middlewares));

// export default createStore(createRootReducer(history), middleware);
