import { axiosForLibraryAPI } from "./axios";

export const searchBook = async (params) => {
  const { data } = await axiosForLibraryAPI
    .request({
      method: "get",
      url: "/v1/book",
      params: params,
    })
    .then((res) => res.data);
  return data;
};
