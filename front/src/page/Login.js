import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLogin } from "../hooks/user-api";
import { loginSchema } from "../utils/form-schemas";
import GoogleButton from "../components/GoogleButton";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { mutate } = useLogin();

  const submitHandler = (formData) => {
    mutate(formData);
  };

  return (
    <Wrapper>
      <Header>로그인</Header>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <InputBox>
          <input
            {...register("username")}
            className="register-input"
            type="text"
            placeholder="username"
          />
          <p className="register-error">{errors.username?.message}</p>
        </InputBox>
        <InputBox>
          <input
            {...register("password")}
            className="register-input"
            type="password"
            placeholder="password"
          />
          <p className="register-error">{errors.password?.message}</p>
        </InputBox>
        <button className="login-button">Login</button>
        {/* <GoogleButton /> */}
      </Form>
      <Register>
        계정이 없으신가요?
        <Link to="/register">
          <span> 회원가입</span>
        </Link>
      </Register>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  border: 1px solid #dfe6e9;
  border-radius: 15px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #5eaca0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  padding: 10px 0;
`;

const Form = styled.form`
  padding: 5% 10%;
  input {
    display: block;
    width: 100%;
    height: 35px;
    border: 1px solid #dfe6e9;
    background-color: #fafafa;
    padding-left: 10px;
  }
  p {
    font-size: 10px;
    color: red;
    line-height: 20px;
  }
  .login-button {
    width: 30%;
    max-width: 100px;
    margin: 5px auto 0 auto;
    display: block;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #5eaca0;
    background-color: #5eaca0;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      border: 1px solid #5eaca0;
      color: #5eaca0;
      background-color: #fff;
    }
  }
`;

const InputBox = styled.div`
  margin-bottom: 2.5rem;

  .register-error {
    font-size: 1.45rem;
    line-height: 1.8rem;
    margin-top: 0.8rem;
    color: #e75349;
  }

  .register-input:focus {
    outline: none;
    background: #e7e7fc;
  }
`;
const Register = styled.div`
  text-align: center;
  font-size: 12px;
  height: 30px;
  span {
    color: #74b9ff;
  }
`;

export default Login;
