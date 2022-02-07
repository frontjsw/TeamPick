import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRegister } from "../hooks/user-api";
import { signupSchema } from "../utils/form-schemas";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(signupSchema),
  });

  const { mutate } = useRegister();

  const submitHandler = (formData) => {
    const requestData = { ...formData, provider: null, providerId: null };
    mutate(requestData);
  };

  return (
    <Wrapper>
      <Header>회원 가입</Header>
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
        <InputBox>
          <input
            {...register("email")}
            className="register-input"
            type="text"
            placeholder="email"
          />
          <p className="register-error">{errors.email?.message}</p>
        </InputBox>
        <InputBox>
          <input
            {...register("name")}
            className="register-input"
            type="text"
            placeholder="name"
          />
          <p className="register-error">{errors.name?.message}</p>
        </InputBox>
        <InputBox>
          <input
            {...register("age")}
            className="register-input"
            type="number"
            placeholder="age"
          />
          <p className="register-error">{errors.age?.message}</p>
        </InputBox>
        <BtnBox>
          <button>완료</button>
          <StyledLink to="/">취소</StyledLink>
        </BtnBox>
      </Form>
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
`;

const InputBox = styled.div`
  margin-bottom: 2rem;

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

const BtnBox = styled.div`
  display: flex;
  button {
    width: 30%;
    margin: 15px auto 0 auto;
    display: block;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #5eaca0;
    background-color: #5eaca0;
    color: #fff;
    font-weight: 700;
    transition: 0.3s;
    line-height: 40px;
    font-size: 16px;
    cursor: pointer;
    :hover {
      border: 1px solid #5eaca0;
      color: #5eaca0;
      background-color: #fff;
    }
  }
`;

const StyledLink = styled(Link)`
  width: 30%;
  margin: 15px auto 0 auto;
  display: block;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #5eaca0;
  background-color: #5eaca0;
  color: #fff;
  font-weight: 700;
  transition: 0.3s;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  :hover {
    border: 1px solid #5eaca0;
    color: #5eaca0;
    background-color: #fff;
  }
`;

export default Register;
