import { generalTypes } from "../types";

export const setLoading = (isLoading) => {
  return dispatch => {
    dispatch({
      type: generalTypes.SET_LOADING,
      isLoading: isLoading
    });
  }
};
export const setCurrentRoute = (currentRoute) => {
  return dispatch => {
    dispatch({
      type: generalTypes.SET_CURRENT_ROUTE,
      currentRoute: currentRoute
    });
  }
};