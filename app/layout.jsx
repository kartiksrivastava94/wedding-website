import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { site } from "@/lib/site";

// Display serif (couple names, headings) + sans UI (nav, labels, body).
// Approximates the Zola "Maywood Off-White" look.
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});
const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: `${site.coupleNames} — Wedding`,
  description: `Join us in ${site.location}.`,
  // Keep the site out of search engines — it's for invited guests only.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
