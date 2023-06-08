import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "reducers/loginStatusReducer";
import { getAccessTokenFromRefreshToken } from "services/userAuth";
import { axiosForLibraryAPI } from "services/axios";
import { toast } from "react-toastify";

const useAPI = ({ queryFn, getNow }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const run = async () => {
    setLoading(true);
    return queryFn()
      .then((res) => {
        setResponse(res);
        return Promise.resolve(res);
      })
      .catch((err) => {
        if (err?.response?.status === 401 && loginStatus.isLogin) {
          const { method, url, data, params } = err.config;
          return getAccessTokenFromRefreshToken()
            .then((res) => {
              return axiosForLibraryAPI
                .request({ method, url, data, params })
                .then((res) => {
                  setResponse(res);
                  return Promise.resolve(res);
                });
            })
            .catch((err2) => {
              dispatch(setLoginStatus({ ...loginStatus, isChecking: true }));
              setResponse(null);
              toast.error(err.message);
              setError(err);
              return Promise.reject(err);
            });
        }
        setResponse(null);
        toast.error(err.message);
        setError(err);
        return Promise.reject(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const runNow = async () => {
    try {
      if (getNow) run();
    } catch (err) {}
  };
  useEffect(() => {
    if (getNow) runNow();
  }, []);
  return { response, run, loading, error };
};

export default useAPI;