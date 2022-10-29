// import UserModel from "@model/user/UserModel";
import {makeAutoObservable, set} from "mobx";

export const getUser =async () => {
  if (typeof window === undefined) {
    return null;
  }
  const user = await localStorage.getItem('user');
  const model = JSON.parse(user);
  // set(model,JSON.parse(user));
  return model;

};

export const setUser = async (user) =>  {
  if (typeof window === undefined) {
    return null;
  }
  await localStorage.setItem('user', JSON.stringify(user));
};

export const clearLogin = async (user) =>  {
  if (typeof window === undefined) {
    return null;
  }
  await localStorage.removeItem('user');
};

