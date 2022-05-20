// Types
import { serviceTypes } from '../types';

// Initial State
const initialState = {
  serviceList: [],
};

export default function serviceReducer (state = initialState, action) {
  switch (action.type) {
    case serviceTypes.GET_ALL_SERVICES:
      return {
        ...state,
        serviceList: action.serviceList
      };
    default:
      return state;
  }
}