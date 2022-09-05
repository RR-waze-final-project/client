import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { auth } from '../config/firebase';
import { User } from '../utils/User'

const baseUrl = 'http://localhost:3333/user';

const putUser = async (user: User) => {
    try {
        const res = await axios.put(`http://localhost:3333/user/addUser`, user);
        let tempList = await res.data;
        return tempList;
    } catch (error) { console.log(error); }
}

const addUser = async (firstName: string, lastName: string, phone: string | undefined | null) => {
    try {
        const user = {
            fireBaseUId: auth.currentUser?.uid,
            role: 'admin',
            firstName,
            lastName,
            phone,
            email: auth.currentUser?.email,
        }
        const res = await axios.post(baseUrl, user);
        let tempList = await res.data;
        return tempList;
    } catch (error) { console.log(error); }
}

const getUser = async () => {
    const userId = auth.currentUser?.uid;
    if (userId) {
        try {
            const res = await axios.get(`${baseUrl}/${userId}`);
            return res.data;
        } catch (error) { console.log(error); }
    }
}
class Store {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async addUser(firstName: string, lastName: string, phone: string | undefined | null) {
        await addUser(firstName, lastName, phone);
        this.getUserById();
    }

    async getUserById() {
        this.user = await getUser();
    }

    async putUser(user: User) {
        await putUser(user);
        this.user = user;
    }
}
const userStore = new Store();
export default userStore;