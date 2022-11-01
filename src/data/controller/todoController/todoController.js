import React,  from 'react'
import {makeAutoObservable, set} from 'mobx'
import {TodoService} from "../../../queries/todo/todo.service";
import TodoModel from "../../models/todoModel";
export default class BlogController {

    loading = false;
    posts = [];
    page = 1;
    pageSize = 20 ;
    limitPosts=[]


    constructor() {
        makeAutoObservable(this)
    }

    setPagination= (page = 1 , pageSize= 20) =>{
       this.limitPosts.splice(0,20)
        this.page = page
        this.posts.map((item , index)=>{
            if(index >= (page * pageSize - pageSize)){
                if(index<(page*pageSize)){
                    this.limitPosts.push(item)
                }
            }
        })
        console.log(this.limitPosts)
    }

    getList = async () => {
        this.loading = true;
        try {
            const response = await TodoService.List();
            console.log(response)
            const temp =[]
            response.map((item ,index)=>{
                const cmodel = new TodoModel();
                set(cmodel, item);
                temp.push(cmodel)
            })
            console.log(temp)
            this.posts = temp;
            this.setPagination(1 , 20)
            this.loading = false;
        } catch (e) {

            this.loading = false;
        }
    }

    create = async (value , callback) => {
        this.loading = true;
        try {
            const response = await TodoService.create({title:value});
                const cmodel = new TodoModel();
                set(cmodel, response);
                this.limitPosts.push(cmodel)
                // this.limitPosts[this.limitPosts.length + 1] = cmodel
            console.log(this.limitPosts)
            callback()
            this.loading = false;
        } catch (e) {
            this.loading = false;
        }
    }
    update = async ( item , index) => {
        this.loading = true;
        let status = !this.limitPosts[index].completed
        try {
            const response = await TodoService.update({completed: status} , item.id);
            console.log(response)
            this.limitPosts[index].completed =  !this.limitPosts[index].completed
            this.loading = false;
        } catch (e) {
            this.loading = false;
        }
    }
    updateItem = async ( value , id , index , callback) => {
        this.loading = true;
        try {
            const response = await TodoService.update({title: value} , id);
            this.limitPosts[index].title =  value
            this.loading = false;
            callback()
        } catch (e) {
            this.loading = false;
        }
    }
    deleteted = async ( item , index) => {
        this.loading = true;
        try {
            console.log('controller 1')
            const response = await TodoService.deleted(item.id);
                // delete  this.limitPosts[index]
            this.loading = false;
        } catch (e) {
            this.loading = false;
        }
    }

}
