import { InfoOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Message from "./Message";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase"

function Chat({user}) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  const getMessages = () => {
    // db.collection("rooms")
    // .doc(channelId)
    // .collection("messages")

    //below format is more easy to read
    db.collection(`/rooms/${channelId}/messages`)
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let newMessage = {
        user: user.name,
        text: text,
        image: user.photo,
        timestamp: firebase.firestore.Timestamp.now()
      }
    db.collection(`/rooms/${channelId}/messages`).add(newMessage)
    }
  }


  useEffect(() => {
    getChannel();
    getMessages();

    // eslint-disable-next-line
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel && channel.name}</ChannelName>
          <ChannelInfo>{channel && channel.info}</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>

          <InfoIcon />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <Message
              user={data.user}
              image={data.image}
              text={data.text}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage}/>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
  height: inherit;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`;
const MessageContainer = styled.div``;

const Channel = styled.div``;
const ChannelName = styled.div`
  font-weight: 700;
`;
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
`;
const InfoIcon = styled(InfoOutlined)`
  margin-left: 10px;
`;

// const  = styled.div``

//   <Chat>
//     <ChatHeader>
//       <ChatHeaderInfo>
//         <h3>{roomName}</h3>
//         <p>
//           Last seen at {new Date(
//             messages[messages.length - 1]?.timestamp?.toDate()
//           ).toUTCString()}
//         </p>
//       </ChatHeaderInfo>
//     </ChatHeader>
//         <ChatBody>

//     </ChatBody>
//     <ChatFooter>
//       <InsertEmoticon />
//       <form>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           type="text"
//           placeholder="Type a message"
//         ></input>
//         <button onClick={sendMessage} type="submit">
//           Send a message
//         </button>
//       </form>
//       <MicOutlined />
//     </ChatFooter>
//   </Chat>
