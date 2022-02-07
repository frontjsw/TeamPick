import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

import { errorOccurred } from "../store/api-error-slice";
import { login } from "../store/auth-slice";

const instance = axios.create({
  baseURL: "",
});

const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const useRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const craeteUser = (formData) => {
    return instance.post("/signup", formData);
  };

  const mutation = useMutation(craeteUser, {
    onError: (error) => {
      dispatch(errorOccurred(error));
    },
    onSuccess: () => {
      history.push("/login");
    },
  });

  return mutation;
};

export const useLogin = () => {
  const dispatch = useDispatch();

  const loginUser = (formData) => {
    return instance.post("/login", formData);
  };

  const mutation = useMutation(loginUser, {
    onError: (error) => {
      dispatch(errorOccurred(error));
    },
    onSuccess: (response) => {
      console.log(response); // response data 값 확인 후 작업 진행
    },
  });

  return mutation;
};
