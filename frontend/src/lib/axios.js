import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5002/api" : "/api",
    withCredentials:true,
})
//Axios is a powerful HTTP client library that simplifies sending and handling HTTP requests in your JavaScript apps. It’s widely used in React, Node.js, Express, Vue, and Angular projects.

