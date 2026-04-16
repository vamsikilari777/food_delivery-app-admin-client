import api from "../api/Axios"
// const API_URL = "http://localhost:8080/api/orders";
const API_URL = "https://food-delivery-app-server-w0i3.onrender.com/api/orders";


export const fetchAllOrders = async () => {
    try {
        const response = await api.get("/api/orders/all");
        return response.data;
    } catch (error) {
        console.error('Error occured while fetching the orders', error);
        throw error;
    }
}

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await api.patch(
            `/api/orders/status/${orderId}?status=${status}`
        );
        return response.status === 200;
    } catch (error) {
        console.error('Error occured while updating the status', error);
        throw error;
    }
}