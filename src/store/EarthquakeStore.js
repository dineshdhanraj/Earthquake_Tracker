import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { EarthquakeReducer } from "../reducer/EarthquakeReducer";

const middleware=[thunk]

const EarthquakeStore=createStore(
   EarthquakeReducer,
   applyMiddleware(...middleware)
);

export default EarthquakeStore;