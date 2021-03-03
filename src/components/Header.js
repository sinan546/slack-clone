import { AccessTime, HelpOutline } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Header({ user, signOut }) {
  
 

  return (
    <Container>
      <Main>
        <AccessTime />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutline />
      </Main>
      <UserContainer>
        <UserName>{user.name}</UserName>
        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : "https://imgur.com/6VBx3io"}
            alt="userimage"
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
background: #350d36;
color: white; 
display: flex;
align-items: center;
justify-content: center;
position: relative;
box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`
const Main = styled.div`
display: flex;
margin: 0 16px;
`
const SearchContainer = styled.div`
min-width: 400px;
margin: 0 16px;
`
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  width: 100%;
  input{

      background-color: transparent;
      width: 96%;
      border: none;
  outline: none;
  color: white;
  padding: 4px 8px;
  }
`;

const UserContainer = styled.div`
display: flex;
align-items: center;
padding-right: 16px;
position: absolute;
right: 0;
`
const UserName = styled.div`
padding-right: 16px;

`
const UserImage = styled.div`
border: 2px solid white;
    border-radius: 100%; 
    width: 28px;
    height: 28px;
    cursor: pointer;


img{
    border-radius: 100%;
    ${'' /* width: 100%; */} /* both works perfectly */
    width: inherit;
}`
