import React, { useState } from "react"
import NavBar from "./NavBar/NavBar"
import Routes from "./Routes"
import CurrentUserContext from "../helpers/CurrentUserContext"
import NewLadderContext from "../helpers/NewLadderContext"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("ROAR_CURRENT_USER"))
  const [newLadderData, setNewLadderData] = useState({})
  const setUser = token => {
    sessionStorage.setItem("ROAR_CURRENT_USER", token)
    setCurrentUser(token)
  }
  return (
    <ChakraProvider>
      <CurrentUserContext.Provider value={{ currentUser, setUser }}>
        <NewLadderContext.Provider value={{ newLadderData, setNewLadderData }}>
          <div className="App">
            <NavBar setUser={setUser} />
            <Routes setUser={setUser} />
          </div>
        </NewLadderContext.Provider>
      </CurrentUserContext.Provider>
    </ChakraProvider>
  )
}

export default App
