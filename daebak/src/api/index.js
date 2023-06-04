import axios from "axios";
import { setInterceptors } from "./config/interceptors";

function create(url, options) {
    const instance = axios.create(Object.assign({ baseURL: url }, options));
    setInterceptors(instance);
    return instance;
}
const baseURL = "https://daebaknara.du.r.appspot.com";
export const apiInstance = create(baseURL);
