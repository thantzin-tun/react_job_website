import {configUrl} from './config'
import axios from "axios";
export const domainUrl = axios.create({
    baseURL: configUrl.domain,
    headers:{ 
    }
})
