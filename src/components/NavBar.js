import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { MdAccountCircle, MdEdit } from "react-icons/md";
import { useApolloClient } from "@apollo/client";
import "./NavBar.css";
import CurrentUserContext from "../helpers/CurrentUserContext";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {currentUser, setUser} = useContext(CurrentUserContext);
  const client = useApolloClient();
  const history = useHistory();
  const handleLogOut = (e) => {
    e.preventDefault();
    setUser('');
    // clear Apollo store
    client.clearStore();
    history.push("/");
  }
  return (
    <div>
      <Navbar light expand="md" className="navbar navbar-dark bg-dark mb-5">
        <Link to="/"><NavbarBrand>Roar</NavbarBrand></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/learn">Learn More</NavLink>
            </NavItem>
          </Nav>
          { !currentUser ?
            <Nav>
              <Link to="/login"><Button color="primary">Log In</Button></Link>
              <NavItem>
                <NavLink tag={Link} to="/signup">Sign Up</NavLink>
              </NavItem>
            </Nav> :
            <Nav className="ml-auto" navbar>
              {/* New stuff drowndown */}
              <UncontrolledDropdown nav inNavbar className="mr-3">
                <DropdownToggle nav caret>
                  <NavbarBrand className="newIcon">
                    <MdEdit />
                  </NavbarBrand>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/ladders/new">
                    <DropdownItem>New Fear Ladder</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* Profile dropdown */}
              <UncontrolledDropdown nav inNavbar className="mr-3">
                <DropdownToggle nav caret>
                  <NavbarBrand className="profileIcon">
                    <MdAccountCircle />
                  </NavbarBrand>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/home">
                    <DropdownItem>My Profile</DropdownItem>
                  </Link>
                  <Link to="/profile">
                    <DropdownItem>Settings</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button color="danger" size="sm" onClick={handleLogOut}>Log Out</Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          }
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;