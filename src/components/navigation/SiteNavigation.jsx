import React, { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.div``;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) =>
    props.active ? props.theme.color.c2 : props.theme.color.c3};
  font-family: poppins-r;
  padding: 10px 0px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.color.c2};
  }

  &::before {
    content: "";
    border: 1px solid ${(props) => props.theme.color.c3};
    width: ${(props) => (props.active || props.hovered ? "30px" : "10px")};
    height: 0;
    margin-right: 10px;
    border-radius: 5px;
    transition: width 0.3s ease;
  }
`;

function Nav() {
  const [activeNavItem, setActiveNavItem] = useState("about");
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <NavContainer>
      <NavItem
        active={activeNavItem === "about"}
        hovered={hoveredNavItem === "about"}
        onClick={() => handleNavItemClick("about")}
        onMouseEnter={() => setHoveredNavItem("about")}
        onMouseLeave={() => setHoveredNavItem(null)}
      >
        About
      </NavItem>
      <NavItem
        active={activeNavItem === "work"}
        hovered={hoveredNavItem === "work"}
        onClick={() => handleNavItemClick("work")}
        onMouseEnter={() => setHoveredNavItem("work")}
        onMouseLeave={() => setHoveredNavItem(null)}
      >
        Work
      </NavItem>
      <NavItem
        active={activeNavItem === "contact"}
        hovered={hoveredNavItem === "contact"}
        onClick={() => handleNavItemClick("contact")}
        onMouseEnter={() => setHoveredNavItem("contact")}
        onMouseLeave={() => setHoveredNavItem(null)}
      >
        Contact
      </NavItem>
    </NavContainer>
  );
}

export default Nav;
