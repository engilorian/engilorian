"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

import {
  Nav,
  Container,
  Brand,
  BrandLogo,
  LogoImage,
  NavList,
  NavItem,
  Hamburger,
  MobileMenu,
} from "./styles";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const hasNavItems = false;

  return (
    <Nav>
      <Container>
        <Brand>
          <BrandLogo>
            <Link href="/">
              <LogoImage src="/favi.svg" alt="Engilorian Logo" />
            </Link>
          </BrandLogo>
        </Brand>

        {hasNavItems && (
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </Hamburger>
        )}

        {hasNavItems && (
          <>
            <NavList>
              {/*
              <NavItem><Link href="/">Ordinance</Link></NavItem>
              <NavItem><Link href="/">Figures</Link></NavItem>
              <NavItem><Link href="/">References</Link></NavItem>
              */}
            </NavList>

            <MobileMenu $open={menuOpen}>
              {/*
              <NavItem><Link href="/">Ordinance</Link></NavItem>
              <NavItem><Link href="/">Figures</Link></NavItem>
              <NavItem><Link href="/">References</Link></NavItem>
              */}
            </MobileMenu>
          </>
        )}
      </Container>
    </Nav>
  );
};

export default Navbar;
