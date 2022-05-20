import request from "./requestWrapper";

function getAllServices(barbershopId) {
  return request({
    url: '/BarbershopAttention/GetAllByBarbershopId',
    method: 'GET',
    params: { barbershopId }
  });
}
function addService(data) {
  return request({
    url: '/BarbershopAttention/Add',
    method: 'POST',
    data: data
  });
}
function updateService(data) {
  return request({
    url: '/BarbershopAttention/Update',
    method: 'PUT',
    data: data
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllServices, addService, updateService
}