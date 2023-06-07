import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "reducers/loginStatusReducer";
import { getAccessTokenFromRefreshToken } from "services/userAuth";
import { axiosForLibraryAPI } from "services/axios";

const useAPI = ({ queryFn }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const getData = (data = null, params = null) => {
    setLoading(true);
    return queryFn()
      .then((res) => {
        setResponse(res);
        return Promise.resolve(res);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          const { method, url, data, params } = err.config;
          return getAccessTokenFromRefreshToken()
            .then((res) => {
              return axiosForLibraryAPI
                .request({ method, url, data, params })
                .then((res) => {
                  setResponse(res);
                  // return Promise.resolve(res);
                });
            })
            .catch((err) => {
              dispatch(setLoginStatus({ ...loginStatus, isChecking: true }));
              // return Promise.reject(err);
            });
        }
        setResponse(null);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { response, getData, loading, error };
};

export default useAPI;
