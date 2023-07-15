import axios, {AxiosInstance} from 'axios';
import Swal from "sweetalert2";
const APIHost = "https://test1.trigan.org/api/v1"


const request = axios.create({
    baseURL: APIHost,
    headers: {
        // 'content-type': 'application/json',
        // 'x-autoo-app-type': EnumAppType.API.id,
        // 'x-autoo-api-version': '1.0',
        // 'x-autoo-client-type': EnumClientType.CLIENT_WEB.id,
        // 'x-autoo-client-version': appConfig.appVersion,
        // 'x-autoo-client-id': '1.0',
        // 'x-autoo-client-language': 'en',
        // 'x-autoo-access-token': authentication.getAccessToken(), //TO DO: fix later
    },
});


const resolveResponse = (response) => {
    return response
};
const resolveError = (response) => {
    Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
        timer: 2000
      })
    return response
}

request.interceptors.response.use(resolveResponse, resolveError);

export default request