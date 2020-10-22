import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
// import {Provider} from "react-redux";
// import {createStore, applyMiddleware, compose} from "redux";
// import reducer from "./Reducers";
// import thunk from "redux-thunk";

// const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
	// <Provider store = {store}>
		<Routes/>
	// </Provider>
	, 
document.getElementById("root"));