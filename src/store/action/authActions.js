import {toast} from "react-toastify";
import UserService from "../../api/service";
export const login = (email, password) => async (dispatch) => {
    try {
      const res = await UserService.login({ email, password });
      var json = JSON.stringify(res.data.token);
      console.log(json);
      console.log(res);
      localStorage.setItem("token", json);
      dispatch({
        type: "SIGN_IN",
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (error) {
      console.log(error.response);
  
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return Promise.reject(error);
    }
  };