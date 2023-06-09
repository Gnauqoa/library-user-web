import { setLoginStatus } from "reducers/loginStatusReducer";
import { storeUser } from "reducers/userReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccessTokenFromRefreshToken,
  getCurrentUser,
  validateToken,
} from "services/user";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
} from "services/localStorage";
import { axiosForLibraryAPI } from "services/axios";
import useAPI from "hooks/useApi";
import { getRule } from "services/search";
import { setRuleSystem } from "reducers/ruleReducer";

const AutoLogin = () => {
  const rule = useSelector((state) => state.rule);
  const getRuleRequest = useAPI({ queryFn: getRule });
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const login = () => {
    let { isChecking, isLogin } = loginStatus;
    if (!isChecking) return;
    isChecking = false;

    if (validateToken(getRefreshToken())) {
      if (!validateToken(getAccessToken())) {
        getAccessTokenFromRefreshToken()
          .then((res) => {
            isLogin = true;
            getCurrentUser().then((res) => dispatch(storeUser(res.data.data)));
          })
          .catch((err) => {
            isLogin = false;
            clearTokens();
          })
          .finally(() => dispatch(setLoginStatus({ isLogin, isChecking })));
        return;
      }

      axiosForLibraryAPI.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${getAccessToken()}`;
      getCurrentUser()
        .then((res) => {
          isLogin = true;
          dispatch(storeUser(res.data.data));
        })
        .catch((err) => {
          isLogin = false;
          removeAccessToken();
          login();
          return;
        })
        .finally(() => dispatch(setLoginStatus({ isLogin, isChecking })));
      return;
    }
    clearTokens();
    dispatch(setLoginStatus({ isLogin, isChecking }));
  };
  useEffect(() => {
    login();
  }, [loginStatus]);
  useEffect(() => {
    if (!rule)
      getRuleRequest
        .run()
        .then((res) => {
          dispatch(setRuleSystem(res));
        })
        .catch((err) => {});
  }, []);
};

export default AutoLogin;
