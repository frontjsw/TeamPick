import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../components/Schema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onValid = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Header>회원 가입</Header>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputBox>
          <input {...register("username")} type="text" placeholder="username" />
          <p>{errors.username?.message}</p>
        </InputBox>
        <InputBox>
          <input
            {...register("password")}
            type="password"
            placeholder="password"
          />
          <p>{errors.password?.message}</p>
        </InputBox>
        <InputBox>
          <input {...register("email")} type="text" placeholder="email" />
          <p>{errors.email?.message}</p>
        </InputBox>
        <InputBox>
          <input {...register("name")} type="text" placeholder="name" />
          <p>{errors.name?.message}</p>
        </InputBox>
        <InputBox>
          <input {...register("age")} type="text" placeholder="age" />
          <p>{errors.age?.message}</p>
        </InputBox>
        <BtnBox>
          <StyledLink to="/">취소</StyledLink>

          <button>완료</button>
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
  width: 100%;
  height: 50px;
  background-color: #5eaca0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
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
`;

const InputBox = styled.div`
  height: 65px;
  padding: 15px 0;
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
