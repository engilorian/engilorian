import { EB_Garamond, Open_Sans } from "next/font/google";

import DefaultLayout from "./components/Layout/Default";
import StyledRegistry from "@/style/register";


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
  title: "Adrian Blanc - Engilorian",
  description: `
    Herein unfolds the chronicle of Adrian Blanc’s endeavors—projects wrought by his keen mind and steady hand, carried from the seeds of conception to the fires of realization.
    Each craft bespeaks his relentless curiosity and mastery: from the alchemical forging of thought to the edifice of innovation.
    Peruse these works and discern the measure of his skill, as one reads the veins that mark a noble stone.
  `,
  keywords: [
    "Portfolio", 
    "Projects", 
    "Craftsmanship", 
    "Alchemy", 
    "Science", 
    "Engineering", 
    "Artistry", 
    "Innovation", 
    "Wisdom"
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
        <StyledRegistry>
        <DefaultLayout>
            {children}
        </DefaultLayout>
        </StyledRegistry>
      </body>
    </html>
  );
}
