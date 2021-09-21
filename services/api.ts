import axios from "axios";
import { University } from "../interfaces";

const axiosInstance = axios.create({
  baseURL: 'http://universities.hipolabs.com/',
});

export const get = async (url: string): Promise<any> => {
  try {
    const result = await axiosInstance.get(url);
    return result.data;
  } catch (error) {
    throw error;
  }
}

