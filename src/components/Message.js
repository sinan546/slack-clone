import React from "react";
import styled from "styled-components";

function Message({ user, image, text, timestamp}) {
  return (
    <Container>
      <UserAvatar>
        <img
          src={image}
          alt="userimage"
        />
      </UserAvatar>
      <MessageContent>
        <UserName>
          {user} <span> {new Date(timestamp.toDate()).toLocaleTimeString()}</span>
        </UserName>
        <UserText>{text}</UserText>
      </MessageContent>
    </Container>
  );
}

export default Message;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;
const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid #3f0e40;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 8px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span {
    margin-left: 8px;
    font-size: 13px;
    font-weight: 400;
    color: rgb(97, 96, 97);
  }
`;
const UserText = styled.span``;
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
// const  = styled.div`

// `
