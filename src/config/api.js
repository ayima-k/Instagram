import axios from "axios";

export const getRegister = (data) => axios.post('users/', data)
// export const getToken = () => axios.get()

