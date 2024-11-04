import Axios from "axios";

const baseUrl = "http://localhost:3500/products/";

export class RestDataSource{
    async getProducts(){
        return (await Axios.get(baseUrl)).data;
    }
    async saveProduct(product){
        return (await Axios.post(baseUrl, product)).data;
    }
    async updateProducts(product){
        return (await Axios.put(`${baseUrl}${product.id}`, product)).data;
    }
    async deleteProducts(product){
        return (await Axios.delete(`${baseUrl}${product.id}`, product)).data;
    }
}