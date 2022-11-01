import {CoreApi} from "../core/CoreApi";
import {API_ENDPOINTS} from "../../libs/request/endpoints_helper";


class TodoRequest extends CoreApi {

    List() {
        return this.http.get(API_ENDPOINTS.LIST_TODO).then((res) => res.data);
    }
    create(input) {
        return this.http.post(API_ENDPOINTS.LIST_TODO , input).then((res) => res.data);
    }
    update(value , id) {
        return this.http.put(`${API_ENDPOINTS.LIST_TODO}/${id}` , value).then((res) => res.data);
    }
    deleted(id) {
        return this.http.delete(`${API_ENDPOINTS.LIST_TODO}/${id}`).then((res) => res.data);
    }
}


export const TodoService = new TodoRequest('auth');
