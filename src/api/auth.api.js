import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const BASE_URL = 'http://localhost:4000';

export const login = async (user) => {
    try {
        const res = await axios.post(`${BASE_URL}/users/login`, user, { withCredentials: true})
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}