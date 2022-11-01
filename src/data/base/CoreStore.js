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
