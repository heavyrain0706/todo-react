import axios, { AxiosResponse } from "axios";

export default class TodosService {
    static async getTodos(): Promise<AxiosResponse> {
        return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
    }
}
