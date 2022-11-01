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

}
