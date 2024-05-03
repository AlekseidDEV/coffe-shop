import  Axios  from "axios";

const axiosClient = Axios.create({
    baseURL: 'http://localhost:1808/'
})

export default axiosClient