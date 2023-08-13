import api from "./api";

async function signUp(body){
    const response = await api.post(`/user/sign-up`, body);
    return response.data;
}

export const userApi = {
    signUp
}