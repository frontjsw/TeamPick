import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const useRegister = () => {
  const history = useHistory();

  const craeteUser = (formData) => {
    return instance.post("/signup", formData);
  };

  const mutation = useMutation(craeteUser, {
    onSuccess: () => {
      history.push("/login");
    },
  });

  return mutation;
};

export const useLogin = () => {
  const loginUser = (formData) => {
    return instance.post("/login", formData);
  };

  const mutation = useMutation(loginUser, {
    onSuccess: (response) => {
      console.log(response); // response data 값 확인 후 작업 진행
    },
  });

  return mutation;
};
