import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Djaje Clone",
  description: "This is the clone version of Djaje.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WhatsApp />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
