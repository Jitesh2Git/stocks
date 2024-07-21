import axios from 'axios';

const API_BASE_URL = 'https://stockprediction-backend.onrender.com'; //Spring Boot server URL

export interface User {
  username:string
}

export interface Prediction {
    newsHeadline : string,
    prediction : string,
    date : string
}

export const createUser = async (user: User): Promise<string> => {
  try {
    const response = await axios.post<string>(`${API_BASE_URL}/user`, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUser = async (username: string): Promise<User> => {
  try {
    const response = await axios.get<User>(`${API_BASE_URL}/user/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const addPrediction = async (username: string, prediction: Prediction): Promise<string> => {
  try {
    const response = await axios.post<string>(`${API_BASE_URL}/user/${username}/prediction`, prediction);
    return response.data;
  } catch (error) {
    console.error('Error adding prediction:', error);
    throw error;
  }
};
