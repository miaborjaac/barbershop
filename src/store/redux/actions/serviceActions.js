import { serviceTypes } from "../types";
import {setLoading} from "./generalActions";
import serviceApi from "../../../api/servicesApi";
import { message } from "antd";
import {SUCCESS_MODAL_ON_OK} from "../../../components/subcomponents/responseModals";
import routes from "../../../utils/routes";

export const getAllServices = (barbershopId) => {
  return dispatch => {
    dispatch(setLoading(true));
    serviceApi.getAllServices(barbershopId)
      .then(response => {
        dispatch({
          type: serviceTypes.GET_ALL_SERVICES,
          serviceList: response.data,
        });
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al traer los servicios.", 5);
        dispatch(setLoading(false));
      })
  }
};
export const addService = (data) => {
  return dispatch => {
    dispatch(setLoading(true));
    serviceApi.addService(data)
      .then(response => {
        SUCCESS_MODAL_ON_OK(response.data, () => window.location.href = routes.services);
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al crear el servicio.", 5);
        dispatch(setLoading(false));
      })
  }
};
export const updateService = (data) => {
  return dispatch => {
    dispatch(setLoading(true));
    serviceApi.updateService(data)
      .then(response => {
        SUCCESS_MODAL_ON_OK(response.data, () => window.location.href = routes.services);
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al actualizar el servicio.", 5);
        dispatch(setLoading(false));
      })
  }
};