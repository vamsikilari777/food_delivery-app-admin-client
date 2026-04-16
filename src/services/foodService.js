
import api from "../api/Axios"

export const addFood = async (foodData, image) => {
    const formData = new FormData();
    formData.append('food', JSON.stringify(foodData));
    formData.append('file', image); 

    try {
        await api.post("/api/foods/add", formData, {headers: { "Content-Type": "multipart/form-data"}});
    } catch (error) {
        console.log('Error', error);
        throw error;
    }
}

export const getFoodList = async () => {
    try {
        const response = await api.get("/api/foods/foods-list");
        console.log("foodList data :", response);
        return response.data;
    } catch (error) {
        console.log('Error fetching food list', error);
        throw error;
    }
}

export const deleteFood = async (foodId) => {
    try {
        const response = await api.delete("/api/foods/"+foodId);
        return response;
    } catch (error) {
        console.log('Error while deleting the food.', error);
        throw error;
    }
}