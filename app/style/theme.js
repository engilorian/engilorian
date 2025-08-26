export const theme = {
  colors: {
    primary: "#1976D2",
    secondary: "#CE4257",
    background: "#F4EBE8",
    foreground: "#071108",
    accent: "#EDE0D4",
    text: {
      primary: "#212529",
      secondary: "#A9A7A2",
      light: "#FAF8F6",
      muted: "#86827E",
      link: "#5872B0",
      linkHover: "#405887",
    },
    border: {
      primary: "#FFB703",
      secondary: "#FFE9CE",
      dark: "#0A100D",
      light: "#FFF3F0",
    },
    states: {
      success: "#6DA34D",
      warning: "#D4A13D",
      danger: "#B84547",
      info: "#5872B0",
      disabled: "#AAA8A3",
    },
    glass: {
      deepBlue:  "#1A1B4B",
      ruby:      "#9B111E",
      crimson:   "#7B0B12",
      golden:    "#D9A602",
      emerald:   "#276D28",
      amethyst:  "#894889",
      violet:    "#501749",
    },
  },

  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'EB Garamond', serif",
    monospace: "'Courier New', monospace",
    sizes: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "24px",
      xxl: "32px",
      xxxl: "40px",
    },
    weights: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
      extraBold: "800",
    },
    lineHeights: {
      tight: "1.2",
      normal: "1.5",
      loose: "1.75",
    },
    letterSpacing: {
      normal: "0",
      wide: "0.05em",
      wider: "0.1em",
    },
  },

  spacing: {
    none: "0",
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
    xxxl: "48px",
    sectionPadding: "64px",
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
  },

  shadows: {
    soft: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    medium: "0px 6px 10px rgba(0, 0, 0, 0.15)",
    hard: "0px 8px 14px rgba(0, 0, 0, 0.2)",
  },

  borders: {
    thin: "1px solid",
    medium: "2px solid",
    thick: "4px solid",
    beefy: "8px solid",

    radius: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      pill: "50px",
      round: "50%",
    },
  },

  transitions: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out",
    slow: "0.5s ease-in-out",
  },

  zIndex: {
    dropdown: 1000,
    modal: 1050,
    tooltip: 1100,
  },

  opacity: {
    disabled: "0.5",
    hover: "0.8",
    active: "1",
  },
};
