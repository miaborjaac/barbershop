//Dependencies
import { combineReducers } from 'redux';

//Subcomponents
import generalReducer from "./generalReducer";
import barbershopReducer from "./barbershopReducer";
import serviceReducer from "./serviceReducer";

//Reducers
export default combineReducers({
  generalReducer: generalReducer,
  barbershopReducer: barbershopReducer,
  serviceReducer: serviceReducer,
});