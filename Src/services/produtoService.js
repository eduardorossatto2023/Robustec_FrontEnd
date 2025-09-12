import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
});

export const ProductService = {
    async getProducts() {
        const res = await api.get("/products"); // GET /products
        return res.data;
    },

    async createProduct(data) {
        const res = await api.post("/products/create", data); // POST /products
        return res.data;
    },

    async updateProduct(id, data) {
        const res = await api.put(`/products/update?id=${id}`, data); // PUT /products?id=123
        return res.data;
    },

    async deleteProduct(id) {
        const res = await api.delete(`/products/delete?id=${id}`); // DELETE /products?id=123
        return res.data;
    },
};