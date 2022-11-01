import {makeAutoObservable} from 'mobx'

export default class TodoModel {
    constructor() {
        makeAutoObservable(this)
    }

    title = ''
    id = ''
    userId = ''
    completed =false

}