import { barbershopTypes } from "../types";
import {setLoading} from "./generalActions";
import barbershopServices from "../../../api/barbershopApi";
import { message } from "antd";
import routes from "../../../utils/routes";
import {SUCCESS_MODAL_ON_OK} from "../../../components/subcomponents/responseModals";

export const getAllBarbershops = () => {
  return dispatch => {
    dispatch(setLoading(true));
    barbershopServices.getAllBarbershops()
      .then(response => {
        dispatch({
          type: barbershopTypes.GET_ALL_BARBERSHOPS,
          barbershopList: response.data,
        });
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al traer las barberías.", 5);
        dispatch(setLoading(false));
      })
  }
};
export const getDetailById = (barbershopId) => {
  return dispatch => {
    dispatch(setLoading(true));
    barbershopServices.getDetailById(barbershopId)
      .then(response => {
        dispatch({
          type: barbershopTypes.GET_BARBERSHOP_DETAIL,
          barbershopDetail: response.data,
        });
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al traer el detalle.", 5);
        dispatch(setLoading(false));
      })
  }
};
export const addBarbershop = (data) => {
  return dispatch => {
    dispatch(setLoading(true));
    barbershopServices.addBarbershop(data)
      .then(response => {
        SUCCESS_MODAL_ON_OK(response.data, () => window.location.href = routes.barbershopsRoutes.home);
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al crear la barbería.", 5);
        dispatch(setLoading(false));
      })
  }
};
export const updateBarbershop = (data) => {
  return dispatch => {
    dispatch(setLoading(true));
    barbershopServices.updateBarbershop(data)
      .then(response => {
        SUCCESS_MODAL_ON_OK(response.data, () => window.location.href = routes.barbershopsRoutes.home);
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al actualizar la barbería.", 5);
        dispatch(setLoading(false));
      })
  }
};
export const deleteBarbershop = (data) => {
  return dispatch => {
    dispatch(setLoading(true));
    barbershopServices.deleteBarbershop(data)
      .then(response => {
        SUCCESS_MODAL_ON_OK(response.data, () => window.location.href = routes.barbershopsRoutes.home);
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error("Error al eliminar la barbería.", 5);
        dispatch(setLoading(false));
      })
  }
};