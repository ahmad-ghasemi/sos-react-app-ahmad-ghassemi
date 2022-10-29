import {makeAutoObservable, set} from "mobx";
import {clearLogin, getUser} from "../../libs/request/localstorageService";
import Cookies from 'js-cookie';


export class CoreStore {


    token = "";
    isAuth = 0;
    loginModal = false;
    isServer = false;
    lang = ''

    constructor(isServer, initialData, cookie) {
        makeAutoObservable(this);
    }

    // setDatafromLocal = async () => {
    //     try {
    //         // this.userDataSet(getUser())
    //         // const isAuth = getIsAuth() || 0;
    //         // const D = Cookies.get("isAuth");
    //         // console.log(D)
    //         // ;
    //         // // const token = Cookies.get('token')
    //         //
    //         // if (isAuth == null || isAuth == undefined || isAuth === false || isAuth == 0) {
    //         //     return;
    //         // }
    //         // if (isAuth) {
    //         //     isAuth = 1;
    //         // }
    //         // this.isAuth = isAuth;
    //         // this.token = token;
    //         //
    //         // if(!this.isServer){
    //         //     const user = await localStorage.getItem('user');
    //         //     console.log(JSON.parse(user));
    //         //  await   set(this.user, JSON.parse(user))
    //         // }
    //
    //     } catch (e) {
    //         console.log(e)
    //         console.log('CoreStore Error', e)
    //     }
    // }
    // setToken = (token) => {
    //
    //     this.token = token;
    //     this.isAuth = 1;
    // }
    // setLang = (lan) => {
    //     Cookies.set('lang', lan);
    //     this.lang = lan
    // }
    //
    // logout = async () => {
    //     clearAuth();
    //     await clearLogin();
    //     this.isAuth = 0;
    //     this.token = "";
    //     this.user = new UserModel();
    //     // Router.push("/");
    // }
    //
    //
    // userDataSet = async (data) => {
    //
    //     if (data.name != undefined) {
    //         if (data.name.length == 0) {
    //             data.name = "Moverii User";
    //         }
    //     }
    //
    //
    //     set(this.user, data);
    //
    // }
    //
    // loginModalAction(status) {
    //     this.loginModal = status;
    // }


}


let store = null;

export default function initializeStore(isServer, initialData, cookie) {

    if (isServer) {
        return new CoreStore(isServer, initialData, cookie)
    }
    if (store === null) {
        store = new CoreStore(isServer, initialData, cookie)
    }
    return store;
}
