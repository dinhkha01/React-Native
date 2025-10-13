import axios from 'axios';


// Tạo instance axios
export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Thay đổi URL API của bạn
  timeout: 10000, // 10 giây
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});