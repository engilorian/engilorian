"use client";

import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import {
  FooterContainer,
  FooterContent,
  Section,
  SocialIcons,
  SocialIconLink,
  BrandName,
  FooterNavList,
  FooterNavItem,
  FooterNavLink,
} from "./styles";


export default function Footer() {
  const links = [
    
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <SocialIcons>
            <SocialIconLink href="https://x.com/engilorian" target="_blank" aria-label="Twitter">
              <FaXTwitter/>
            </SocialIconLink>
            <SocialIconLink href="https://github.com/engilorian" target="_blank" aria-label="GitHub">
              <FiGithub/>
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/engilorian/" target="_blank" aria-label="Instagram">
              <FiInstagram/>
            </SocialIconLink>
          </SocialIcons>
        </Section>


        <Section>
          <FooterNavList>
            {links.map(({ href, label }) => (
              <FooterNavItem key={label}>
                <FooterNavLink href={href}>{label}</FooterNavLink>
              </FooterNavItem>
            ))}
          </FooterNavList>
        </Section>
      </FooterContent>
    </FooterContainer>
  );
}
