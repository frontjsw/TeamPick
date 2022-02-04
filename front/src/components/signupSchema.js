import * as yup from "yup";

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("필수 입력 항목입니다.")
    .min(6, "최소 6자리의 아이디를 입력해주세요."),
  password: yup
    .string()
    .required("필수 입력 항목입니다.")
    .min(6, "최소 6자리의 비밀번호를 입력해주세요."),
  email: yup
    .string()
    .required("필수 입력 항목입니다.")
    .email()
    .min(6, "최소 6자리의 아이디를 입력해주세요."),
  name: yup
    .string()
    .required("필수 입력 항목입니다.")
    .min(6, "최소 1자리의 이름을 입력해주세요."),
  age: yup
    .string()
    .required("필수 입력 항목입니다.")
    .min(6, "최소 1자리의 나이를 입력해주세요."),
});

export default signupSchema;
