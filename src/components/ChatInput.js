import { Send } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

function ChatInput({ sendMessage }) {

  const [input, setInput] = useState('')

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input)
    setInput('')
  }



  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => {
              setInput(e.target.value)
            }}
            type="text"
            value={input}
            placeholder="Message.." />
          <SendButton
            onClick={send}
            type="submit">
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 14px 20px;
`;

const InputContainer = styled.div`
border: 1px solid #8D8D8E;
border-radius: 4px;

        
        form{
            display: flex;
            height: 42px;
            align-items: center;
            input{
            padding: 0 10px;
            flex: 1;
            outline: none;
            border: none;
            font-size: 15px;
        }
        .MuiSvgIcon-root{
            width: 18px;
        }

`;
const SendButton = styled.button`
  background: green;
  color: #d9d9d9;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #148567;
  }
`