import request from "./requestWrapper";

function getAllBarbershops() {
  return request({
    url: '/Barbershop/GetAll',
    method: 'GET',
  });
}
function getDetailById(barbershopId) {
  return request({
    url: '/Barbershop/GetDetailedById',
    method: 'GET',
    params: { barbershopId: barbershopId }
  });
}
function addBarbershop(data) {
  return request({
    url: '/Barbershop/Add',
    method: 'POST',
    data: data
  });
}
function updateBarbershop(data) {
  return request({
    url: '/Barbershop/Update',
    method: 'PUT',
    data: data
  });
}
function deleteBarbershop(data) {
  return request({
    url: '/Barbershop/Delete',
    method: 'DELETE',
    data: data
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllBarbershops, getDetailById, addBarbershop, updateBarbershop, deleteBarbershop
}