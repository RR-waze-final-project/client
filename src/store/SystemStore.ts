import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { System } from '../utils/System';
import userStore from './UserStore';
import swal from 'sweetalert';

const baseUrl = 'http://localhost:3333/system';

const addSystem = async (system: System) => {
    try {
        const res = await axios.post(baseUrl, system);
        return res.data;
    } catch (error) { console.log(error); }
}

const getSystemsOfAdmin = async (adminId: string) => {
    try {
        const res = await axios.get(`${baseUrl}/specificSystems/${adminId}`)
        return res.data;
    } catch (error) { console.log(error); }
}

const getSystemById = async (systemId: string) => {
    try {
        const res = await axios.get(`${baseUrl}/${systemId}`);

        return res.data;
    } catch (error) { console.log(error); }
}

const updateSystem = async (system: System) => {
    const res = await axios.put(`${baseUrl}/${system._id}`, system);
    return res.data;
}

const deleteSystem = async (systemId: string) => {
    const res = await axios.delete(`${baseUrl}/${systemId}`);
    return res.data;
}

class Store {
    systems: System[] = [];
    currentSystem: System | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async getSystemsOfAdmin() {
        this.systems = await getSystemsOfAdmin(userStore.user?.fireBaseUId || '0');
    }

    async getSystemById(systemId: string) {
        this.currentSystem = await getSystemById(systemId);
    }

    async addSystem(system: System) {
        if (userStore.user) {
            system.adminUid = userStore.user?.fireBaseUId || '';
            await addSystem(system);
            this.systems.push(system);
        }
        else swal("Please Login!",
            "you can't make a system before login!",
            "error");
    }

    async updateSystem(system: System) {
        this.currentSystem = await updateSystem(system);
    }

    async removeSystem(systemId: string) {
        await deleteSystem(systemId);
    }

}
const systemStore = new Store();
export default systemStore;