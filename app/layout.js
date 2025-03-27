import { EB_Garamond, Open_Sans } from "next/font/google";

import DefaultLayout from "./components/Layout/Default";


const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "On The Engilorian",
  description: `
    The Engilorian doth not merely witness—it endureth. Knowledge is no boon bestowed, but a thing taken—wrested from silence, smelted in tribulation, and beaten true upon the anvil of necessity. 
    To seek wisdom is to descend, to suffer meaning, and to fashion the world not as it is, but as it wrestleth against thee—in wind, in stone, in fire—and yet yieldeth, if thou dare shape it.
  `,
  keywords: [
    "Engilorian",
    "Kleos",
    "Aether",
    "Ordeal",
    "Chrysopoeia",
    "Duality",
    "Dynamis",
    "Fervor",
    "Apotheosis",
    "Exploration"
  ],
  icons: { icon: "/favi.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${openSans.variable}`}>
       <DefaultLayout>
       {children}
       </DefaultLayout>
      </body>
    </html>
  );
}
