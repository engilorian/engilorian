import { EB_Garamond, Open_Sans } from "next/font/google";


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
  title: "On Adrian Blanc",
  description: `
    To seek knowledge is to bear the burden of truth—to confront the abyss of ignorance 
    and carve meaning from its depths. Adrian Blanc does not pursue understanding as a 
    passive observer but as one who wrestles with the raw forces of nature, history, and 
    the human condition. His work is not bound by fleeting trends or idle speculation; 
    it is a relentless inquiry into what governs reality and what shapes the soul. 
    Knowledge is not a refuge—it is a crucible.
  `,
  keywords: ["Adrian Blanc", "Thinker", "Philosophy", "Science", "Engineering", "Nature", "History"],
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
        {children}
      </body>
    </html>
  );
}
