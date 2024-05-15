import  Axios  from "axios";

export const axiosClient = Axios.create({
    baseURL: 'http://localhost:1808/'
})

export const axiosJson = Axios.create({
    method: 'POST',
    baseURL: 'https://jsonplaceholder.typicode.com'
})
