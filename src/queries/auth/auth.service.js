import {CoreApi} from "../core/CoreApi";
import {API_ENDPOINTS} from "@libs/request/endpoints_helper";


class AuthRequest extends CoreApi {

    loginMobile(input) {
        return this.http.post(API_ENDPOINTS.LOGIN, input).then((res) => res.data);
    }
    loginOtp(input) {
        return this.http.post(API_ENDPOINTS.MoBileOtpLogin, input).then((res) => res.data);
    }
    loginSocial(input) {
        return this.http.post(API_ENDPOINTS.LoginSocial, input).then((res) => res.data);
    }

    resnedOtp(input) {
        return this.http.post(API_ENDPOINTS.AuthResendOtp, input).then((res) => res.data);
    }

    loginEmail(input) {
        return this.http.post(API_ENDPOINTS.AuthLoginEmail, input).then((res) => res.data);
    }

    register(input) {
        return this.http.post(API_ENDPOINTS.AuthRegister, input).then((res) => res.data);
    }




}


export const AuthService = new AuthRequest('auth');
