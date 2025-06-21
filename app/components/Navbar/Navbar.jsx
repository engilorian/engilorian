"use client";

import React, { useState } from "react";
import ExpandedMenu from "./Menu";
import { FiMenu, FiX } from "react-icons/fi";

import {
  Nav,
  Container,
  Brand,
  BrandLogo,
  LogoImage,
  NavList,
  NavItem,
  NavLink,
  Hamburger,
} from "./styles";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const links = [
  ];

  return (
    <Nav>
      <Container>
        <Brand>
          <BrandLogo href="/">
            <LogoImage src="/favi.svg" alt="Engilorian Logo" />
          </BrandLogo>
        </Brand>

        {links.length > 0 && (
          <NavList>
            {links.map(({ href, label }) => (
              <NavItem key={label}>
                <NavLink href={href}>{label}</NavLink>
              </NavItem>
            ))}
          </NavList>
        )}

        {links.length > 0 && (
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </Hamburger>
        )}
      </Container>

      {links.length > 0 && (
        <ExpandedMenu links={links} open={menuOpen} />
      )}
    </Nav>
  );
}
