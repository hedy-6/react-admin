import axios from "axios";
import qs from "qs";
import { BASE_URL, HTTP_TIMEOUT } from "../config";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = HTTP_TIMEOUT;
axios.defaults.headers.common['Authorization'] = { token_username: 'adminy' };
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        // loading
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response);
    }
);

export default {
    post({ url, data, config = {} }) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            ...config
        }).then(
            response => {
                return response;
            }
        ).catch(error => {
            return error;
        });
    },
    get({ url, params, config }) {
        return axios({
            method: 'get',
            url,
            params,
            ...config
        }).then(
            response => {
                return response;
            }
        ).catch(error => {
            return error;
        });
    }
}
