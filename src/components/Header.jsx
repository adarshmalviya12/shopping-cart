import React from "react";
import {
 Badge,
 Container,
 Dropdown,
 FormControl,
 Nav,
 Navbar,
} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
 return (
  <>
   <Navbar bg="dark" variant="dark" style={{height: 80}}>
    <Container>
     <Navbar.Brand>
      <Link to="/">Shopping Cart</Link>
     </Navbar.Brand>
     <Navbar.Text className="search">
      <FormControl
       style={{width: 500}}
       placeholder="Search a product"
       className="m-auto"
      />
     </Navbar.Text>
     <Nav>
      <Dropdown align="right" variant="success">
       <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaShoppingCart color="white" fontSize="25px" />
        <Badge> {3}</Badge>
       </Dropdown.Toggle>

       <Dropdown.Menu style={{minWidth: 370}}>
        <span>Your Cart is empty</span>
       </Dropdown.Menu>
      </Dropdown>
     </Nav>
    </Container>
   </Navbar>
  </>
 );
};

export default Header;
