import api from "./api";

async function deleteCity(token, id) {
 const config = {
  headers: { Authorization: `Bearer ${token}` },
 };
 const response = await api.delete(`/cities/${id}`, config);
 return response.data;
}

export const citiesApi = {
    deleteCity,
};
