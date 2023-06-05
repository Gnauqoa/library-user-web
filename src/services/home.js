import { axiosForLibraryAPI } from "./axios";

export const getBookSuggest = async () => {
  const { data } = await axiosForLibraryAPI
    .get(`/v1/book/hotBook`)
    .then((res) => res.data);
  return data;
};
