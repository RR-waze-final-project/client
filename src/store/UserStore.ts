import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import {User} from '../utils/User'
const putUser=async(userToDb:User)=>{
    try {
        const res = await axios.put(`http://localhost:3333/user/addUser`, userToDb);
        let tempList = await res.data;
        return tempList;
      } catch (error) { console.log(error); }
}

const addUser=async(userToDb:User)=>{
    try {
        const res = await axios.post(`http://localhost:3333/user/addUser`, userToDb);
        let tempList = await res.data;
        return tempList;
      } catch (error) { console.log(error); }
}
class Store{
user: User | null = null;

constructor(){
    makeAutoObservable(this);
}

async addUser(user : User){
    await addUser(user);
    this.user= user ;
}

async putUser(user:User){
    await putUser(user);
    this.user=user;
}
}
const userStore = new Store();
export default userStore;