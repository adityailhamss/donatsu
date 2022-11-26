import api from ".";

export default {
    // find: () => api.get("api/products").then((res) => res.data),
    // detail: (id) => api.get(`api/products/${id}`).then((res) => res.data),
    find: () => api.get("api/instagrams").then((res) => res.data),
    instagram: (id) => api.get(`api/instagrams/${id}`).then((res) => res.data),
};