// Types
import { generalTypes } from '../types';

// Initial State
const initialState = {
  isLoading: false,
  currentRoute: "/"
};

export default function generalReducer (state = initialState, action) {
  switch (action.type) {
    case generalTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case generalTypes.SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.currentRoute
      };
    default:
      return state;
  }
}