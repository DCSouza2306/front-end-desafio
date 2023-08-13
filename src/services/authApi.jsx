import api from "./api";

async function signIn(body) {
 const response = await api.post(`/auth/sign-in`, body);
 return response.data;
}

export const authenticationApi = {
 signIn,
};