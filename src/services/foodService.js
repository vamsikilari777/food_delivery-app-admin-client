import axios from "axios";

// const API_URL = 'http://localhost:8080/api/foods';
const API_URL = 'VITE_API_URL=https://food-delivery-app-server-w0i3.onrender.com/api/foods';

export const addFood = async (foodData, image) => {
    const formData = new FormData();
    formData.append('food', JSON.stringify(foodData));
    formData.append('file', image); 

    try {
        await axios.post(API_URL+"/add", formData, {headers: { "Content-Type": "multipart/form-data"}});
    } catch (error) {
        console.log('Error', error);
        throw error;
    }
}

export const getFoodList = async () => {
    try {
        const response = await axios.get(API_URL+"/foods-list");
        console.log("foodList data :", response);
        return response.data;
    } catch (error) {
        console.log('Error fetching food list', error);
        throw error;
    }
}

export const deleteFood = async (foodId) => {
    try {
        const response = await axios.delete(API_URL+"/"+foodId);
        return response;
    } catch (error) {
        console.log('Error while deleting the food.', error);
        throw error;
    }
}