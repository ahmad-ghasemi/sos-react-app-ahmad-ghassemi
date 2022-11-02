// import UserModel from "@model/user/UserModel";
import {makeAutoObservable, set} from "mobx";

export const getUser =async () => {
  if (typeof window === undefined) {
    return null;
  }
  const todo = await localStorage.getItem('todo');
  const model = JSON.parse(todo);
  // set(model,JSON.parse(user));
  return model;

};

export const setTodo = async (todo) =>  {
  if (typeof window === undefined) {
    return null;
  }
  await localStorage.setItem('todo', JSON.stringify(todo));
};

export const clearTodo = async (todo) =>  {
  if (typeof window === undefined) {
    return null;
  }
  await localStorage.removeItem('todo');
};

