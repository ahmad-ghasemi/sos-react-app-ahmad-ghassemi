import {CoreApi} from "../core/CoreApi";
import {API_ENDPOINTS} from "../../libs/request/endpoints_helper";


class TodoRequest extends CoreApi {

    List() {
        return this.http.get(API_ENDPOINTS.LIST_TODO).then((res) => res.data);
    }

}


export const TodoService = new TodoRequest('auth');
