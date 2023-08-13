import api from "./api";

async function deleteCity(token, id) {
 const config = {
  headers: { Authorization: `Bearer ${token}` },
 };
 console.log(token, id)
 const response = await api.delete(`/cities/${id}`, config);
 return response.data;
}

export const citiesApi = {
    deleteCity,
};
