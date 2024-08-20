import { AxiosInstance } from "./axios";

type Item = {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  tags: string;
  sku: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
};

export const axiosItem = async (query: string) => {
  try {
    const response = await AxiosInstance.get<Item[]>("/items/search", {
      params: { query },
    });

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
