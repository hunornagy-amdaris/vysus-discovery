import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "@/styles/global.css";
import Navigation from "@/modules/core/header/Navigation";

export const metadata = {
  title: "Vysus",
  description: "Vysus discovery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen dark:bg-gray-900`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
