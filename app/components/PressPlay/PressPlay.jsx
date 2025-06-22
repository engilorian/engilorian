"use client";

import React from "react";

import {
  PressPlayContainer,
  IframeWrapper,
} from "./styles";


export default function PressPlay({ spotifyId, type = "track" }) {
  const src = `https://open.spotify.com/embed/${type}/${spotifyId}?utm_source=generator&theme=0`;

  return (
    <PressPlayContainer>
      <IframeWrapper
        src={src}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </PressPlayContainer>
  );
}
