import axios from "axios";
const axiosSecure = axios.create({
    baseURL: 'https://assignment-12-server-beta-roan.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;