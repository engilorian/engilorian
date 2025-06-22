"use client";

import React from "react";
import Image from "next/image";

import { 
  WrapContainer, 
  Portrait, 
  Copy 
} from "./styles";


export default function Bio({ src, alt, children }) {
  return (
    <WrapContainer>
      <Portrait>
        <Image src={src} alt={alt} width={200} height={200} />
      </Portrait>
      <Copy>
        {children}
      </Copy>
    </WrapContainer>
  );
}
