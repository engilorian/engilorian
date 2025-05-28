"use client";
import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";


export default function StyledRegistry({ children }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  return (
    <StyleSheetManager sheet={sheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
