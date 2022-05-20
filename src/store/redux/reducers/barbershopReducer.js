// Types
import { barbershopTypes } from '../types';

// Initial State
const initialState = {
  barbershopList: [],
  barbershopDetail: {}
};

export default function barbershopReducer (state = initialState, action) {
  switch (action.type) {
    case barbershopTypes.GET_ALL_BARBERSHOPS:
      return {
        ...state,
        barbershopList: action.barbershopList
      };
    case barbershopTypes.GET_BARBERSHOP_DETAIL:
      return {
        ...state,
        barbershopDetail: action.barbershopDetail
      };
    default:
      return state;
  }
}