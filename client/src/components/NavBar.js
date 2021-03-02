import React, { useState, useContext, useEffect } from "react"
import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import MenuItem from "./MenuItem"
import NavBarContainer from "./NavBarContainer"
import { Link, useHistory } from "react-router-dom"
import { useApolloClient } from "@apollo/client"
import CurrentUserContext from "../helpers/CurrentUserContext"
import { Stack, Box, Button } from "@chakra-ui/react"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const [scrollY, setScrollY] = useState(0)

  const logit = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

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
    <NavBarContainer
      boxShadow={{
        base: isOpen
          ? "rgba(0, 0, 0, 0.08) 0px 2px 2px 0px"
          : scrollY > 10
          ? "rgba(0, 0, 0, 0.08) 0px 2px 2px 0px"
          : undefined,
      }}
      {...props}
    >
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
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/signup">
                  Sign Up
                </Link>
              </Button>
              <Button ml="2" variant="outline" colorScheme={"purple"}>
                <Link style={{ color: "#5A43F5", textDecoration: "none" }} to="/login">
                  Log In
                </Link>
              </Button>
            </Box>
          </Stack>
        </Box>
      ) : (
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
            <MenuItem color="gray.600" to="/home">
              Home
            </MenuItem>
            <MenuItem color="gray.600" to="/settings">
              Settings
            </MenuItem>
            <Box>
              {/* <ProfilePreviewDropdown /> */}
              <Button colorScheme="purple" onClick={handleLogOut} variant="outline">
                <Link style={{ color: "#5A43F5", textDecoration: "none" }} to="/logout">
                  Logout
                </Link>
              </Button>
            </Box>
          </Stack>
        </Box>
      )}
    </NavBarContainer>
  )
}

export default NavBar
