import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import {System} from '../utils/System';
import userStore from './userStore';

const addSystem=async(systemToDb:System)=>{
    try {
        const res = await axios.post(`http://localhost:3333/system/createSystem`, systemToDb);
        let tempList = await res.data;
        return tempList;
    } catch (error) { console.log(error); }
}

const getAllSystems = async (managerId:string) => {
    try {   
        const res = await axios.get(`http://localhost:3333/system/${managerId}`)
        let tempList = await res.data;
        return tempList;
    } catch (error) { console.log(error); }
}

class Store{
systems:any[] = [];
currentSystem: any = null;

constructor(){
    makeAutoObservable(this);
}

async getAllSystems() {
    this.systems = await getAllSystems(userStore.user?._id);
}

async addSystem(system:System){
    await addSystem(system);
    this.systems.push(system);
}

}
const systemStore = new Store();
export default systemStore;