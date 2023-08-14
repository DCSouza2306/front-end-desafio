import api from "./api";

async function search(token) {
 const config = {
  headers: { Authorization: `Bearer ${token}` },
 };
 const response = await api.get(`/search`, config);
 return response.data;
}

async function includeCity(city, token) {
 const config = {
  headers: { Authorization: `Bearer ${token}` },
 };

 const response = await api.post(`/search`, city, config);
 return response.data;
}

export const searchApi = {
 search,
 includeCity
};
