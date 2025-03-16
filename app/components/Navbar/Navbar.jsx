"use client";

import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Nav, Container, Brand, BrandLogo, LogoImage, NavList, NavItem } from "./styles";


const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Brand>
          <BrandLogo>
            <Link href="/">
              <LogoImage src="/sapience.svg" alt="Sapience & Zeal" />
            </Link>
          </BrandLogo>
        </Brand>
        <NavList>
          <NavItem>
            <Link href="https://x.com/engilorian" target="_blank">
              <FaXTwitter />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="https://www.youtube.com/@engilorian" target="_blank">
              <FaYoutube />
            </Link>
          </NavItem>
        </NavList>
      </Container>
    </Nav>
  );
};

export default Navbar;