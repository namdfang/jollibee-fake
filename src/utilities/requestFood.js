import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_FOOD_URL,
    headers: {
        "content-type": "application/json",
    },
});

request.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

request.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        console.log(response.data);
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default request;