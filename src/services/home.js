import { axiosForLibraryAPI } from "./axios";

export const getNewBook = async () => {
  const { data } = await axiosForLibraryAPI
    .get(`/v1/book?per_page=3&page=1&type=new`)
    .then((res) => res.data);
  return data;
};
export const getTopBook = async () => {
  const { data } = await axiosForLibraryAPI
    .get(`/v1/book?per_page=20&page=1&type=new`)
    .then((res) => res.data);
  return data;
};
export const getRecommend = async () => {
  const { data } = await axiosForLibraryAPI
    .get(`/v1/book?per_page=20&page=1&type=hot`)
    .then((res) => res.data);
  return data;
};
