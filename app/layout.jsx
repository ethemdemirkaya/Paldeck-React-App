import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["800"],

});

export const metadata = {
  title: "Paldeck App",
  description: "My paldeck app started.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${robotoSlab.className} h-full`}>{children}</body>
    </html>
  );
}
