import React, { useState, useContext } from "react"
import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import MenuItem from "./MenuItem"
import NavBarContainer from "./NavBarContainer"
import { Link, useHistory } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md"
import { useApolloClient } from "@apollo/client"
import CurrentUserContext from "../helpers/CurrentUserContext"
import ProfilePreviewDropdown from "./ProfilePreviewDropdown"
import { Stack, Box, Button } from "@chakra-ui/react"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const { currentUser, setUser } = useContext(CurrentUserContext)

  const client = useApolloClient()
  const history = useHistory()
  const handleLogOut = e => {
    e.preventDefault()
    setUser("")
    // clear Apollo store
    client.clearStore()
    history.push("/")
  }

  return (
    <NavBarContainer {...props}>
      <Logo color={["white", "white", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {!currentUser ? (
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem color="gray.600" to="/about">
              Who are we?
            </MenuItem>
            <MenuItem color="gray.600" to="/learn">
              What is exposure therapy?
            </MenuItem>
            <Box>
              <Button colorScheme="purple">
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button ml="2" variant="outline" colorScheme="purple">
                <Link to="/login">Log In</Link>
              </Button>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Box>
            <MdAccountCircle />
          </Box>
          <MenuItem to="/home">Home</MenuItem>
          <MenuItem to="/ladders">My Mountains</MenuItem>
          <MenuItem to="/profile">Profile</MenuItem>
          <Box>
            <ProfilePreviewDropdown />
            <Button onClick={handleLogOut}>
              <Link to="/logout">Logout</Link>
            </Button>
          </Box>
        </Stack>
      )}
    </NavBarContainer>
  )
}

export default NavBar
