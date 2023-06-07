import { axiosForLibraryAPI } from "./axios";

export const getBookById = async (id) => {
  const { data } = await axiosForLibraryAPI
    .get(`/v1/book/${id}`)
    .then((res) => res.data);
  return data;
};
