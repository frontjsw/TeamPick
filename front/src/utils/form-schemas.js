import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, "아이디는 6자리 이상이어야 합니다.")
    .max(13, "아이디는 13자리를 넘을 수 없습니다.")
    .required("필수 입력 항목입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자리 이상이어야 합니다.")
    .max(20, "비밀번호는 20자리를 넘을 수 없습니다.")
    .required("필수 입력 항목입니다."),
});

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /^[a-z0-9]*$/,
      "아이디는 공백 없이 영문 소문자와 숫자로만 이루어져야 합니다."
    )
    .min(6, "아이디는 6자리 이상이어야 합니다.")
    .max(13, "아이디는 13자리를 넘을 수 없습니다.")
    .required("필수 입력 항목입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자리 이상이어야 합니다.")
    .max(20, "비밀번호는 20자리를 넘을 수 없습니다.")
    .matches(
      /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/,
      "숫자와 특수문자가 적어도 하나 이상 포함되어야 합니다."
    )
    .required("필수 입력 항목입니다."),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("필수 입력 항목입니다."),
  name: yup
    .string()
    .max(20, "사용자 이름은 20자리를 넘을 수 없습니다.")
    .matches(/^[가-힣a-zA-Z\s]+$/, "이름은 한글과 영문만 가능합니다.")
    .required("필수 입력 항목입니다."),
  age: yup
    .number()
    .typeError("숫자를 입력해주십시오.")
    .required("필수 입력 항목입니다."),
});

export { loginSchema, signupSchema };
