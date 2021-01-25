import { useState } from 'react';
import './App.css';
import NavBar from "./NavBar";
import Routes from "./Routes";
import CurrentUserContext from "../helpers/CurrentUserContext";
import NewLadderContext from "../helpers/NewLadderContext";

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("ROAR_CURRENT_USER"));
  const [newLadderData, setNewLadderData] = useState({});
  const setUser = (token) => {
    localStorage.setItem("ROAR_CURRENT_USER", token);
    setCurrentUser(token);
  }
  return (
    <CurrentUserContext.Provider value={{currentUser, setUser}}>
      <NewLadderContext.Provider value={{newLadderData, setNewLadderData}}>
        <div className="App">
          <NavBar setUser={setUser}/>
          <Routes setUser={setUser}/>
        </div>
      </NewLadderContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
