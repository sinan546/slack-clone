import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login({user}) {


  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName.split(' ').[0],
          photo: result.user.photoURL
        }
        localStorage.setItem("user", JSON.stringify(newUser));
        user(newUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
        <h1>Sign in</h1>
        <SignInButton onClick={signIn}>Sign in with Google</SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;
const SlackImg = styled.img`
  height: 100px;
  padding-bottom: 10px;
`;
const SignInButton = styled.button`
  margin-top: 50px;
  background: #2acc77;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  outline: none;
  :hover {
    background: white;
    color: #2acc77;
    border: 1px solid #2acc77;
  }
`;
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
