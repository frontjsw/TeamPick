import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import styled from "styled-components";

const clientId = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;

const GoogleButton = () => {
  const onFailure = (error) => {
    console.log(error);
  };

  const onSuccess = async (response) => {
    console.log(response); // response에서 데이터 뽑아와서 send?

    const data = await axios.post("/oauth/jwt/google", response);
    console.log(data);
  };

  return (
    <Wrapper>
      <GoogleLogin
        clientId={clientId}
        // render={(renderProps) => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
        //     구글 계정으로 로그인 하기
        //   </button>
        // )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        className="google-login"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  button {
    width: 70%;
  }
`;

export default GoogleButton;
