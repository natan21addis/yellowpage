import axios from "axios";

import {
  requestErrorHandler,
  requestInterceptor,
  responseErrorHandler,
  responseInterseptor,
} from "./AxiosMethods";

const baseUrl = "http://localhost:5000/api";
const axiosApi = axios.create({
  baseURL: baseUrl,
});
axiosApi.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosApi.interceptors.response.use(responseInterseptor, responseErrorHandler);
export default axiosApi;
