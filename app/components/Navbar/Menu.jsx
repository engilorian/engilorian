"use client";

import React from "react";

import {
  MenuWrapper,
  MenuItem,
  MenuLink
} from "./styles";


export default function ExpandedMenu({ links, open }) {
  if (!links || links.length === 0) return null;

  return (
    <MenuWrapper open={open}>
      {links.map(({ href, label }) => (
        <MenuItem key={label}>
          <MenuLink href={href}>{label}</MenuLink>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
}
