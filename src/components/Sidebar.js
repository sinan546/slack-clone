import { Add, AddCircleOutline } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { sidebarItems } from "../data/SidebarData";
import db from "../firebase";
import { useHistory } from "react-router-dom";



function Sidebar({ rooms }) {

  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/${id}`)
    }
  };

  const addChannel = () => {
    const roomName = prompt("Enter new room name");
    let roomInfo = "";
    roomName
      ? (roomInfo = prompt("Enter new room info"))
      : alert("No room created");

    !roomName
      ? console.log("")
      : db
          .collection("rooms/")
          .add({
            name: roomName,
            info: roomInfo,
          })
          .then(() => {
            console.log("New room is created");
          })
          .catch((error) => {
            console.log("Got an error", error);
          });
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>Cuet Community</Name>
        <NewMessage>
          <AddCircleOutline />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon} {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer onClick={addChannel}>
          <div>Channels</div>
          <Add />
        </NewChannelContainer>
        <ChannelsList>
          {rooms.map((room) => (
            <Channel onClick={()=>goToChannel(room.id)}># {room.name}</Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;
const WorkspaceContainer = styled.div`
  color: white;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 19px;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div``;

const NewMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 100%;
  color: #3f0e40;
  cursor: pointer;
  ${"" /* fill: #3f0e40; it's doing shit here */}
`;
const MainChannels = styled.div`
  padding-top: 20px;
`;
const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
  cursor: pointer;
`;

const ChannelsList = styled.div``;
const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
// const Search = styled.div`
// `
