import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            info: doc.data().info,
          };
        })
      );
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login user={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/:channelId">
                  <Chat user={user} />
                </Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
