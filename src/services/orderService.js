import axios from "axios";

// const API_URL = "http://localhost:8080/api/orders";
const API_URL = "https://food-delivery-app-server-w0i3.onrender.com/api/orders";


export const fetchAllOrders = async () => {
    try {
        const response = await axios.get(API_URL+"/all");
        return response.data;
    } catch (error) {
        console.error('Error occured while fetching the orders', error);
        throw error;
    }
}

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await axios.patch(
            `${API_URL}/status/${orderId}?status=${status}`
        );
        return response.status === 200;
    } catch (error) {
        console.error('Error occured while updating the status', error);
        throw error;
    }
}