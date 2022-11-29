import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ buyer, setBuyer }) {

  function handleLogoutClick() {
    // console.log("Click")
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setBuyer(false);
      }
    });
  }

  return (
    <Wrapper className="navbar">

      <Logo>
        <Link to="/">StuffMart</Link>
      </Logo>

      <Nav>
        <Button as={Link} to="/purchases">
          Purchases
        </Button>

        <Button as={Link} to="/seller_summary">
          Seller Home
        </Button>

        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>

        <Link to="/cart">
          <img className="cartphoto" style={{ width: 35, height: 35 }} src="https://i.imgur.com/PrevY2R.png" alt="Shopping Cart Icon" ></img>
        </Link>
      </Nav>

    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #ff1493;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
