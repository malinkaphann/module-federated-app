import api from "./api";
import { METHODS } from "./constants";
import data from "./data";

export async function getUsers() {
    return await api(METHODS.GET, `http://localhost:3000/users`);
}

export async function getUsersFromLocal() {
   return data;
}