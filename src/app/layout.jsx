import "./globals.css";
import { Inter } from "next/font/google";
import MyNavbar from "@/components/myNavbar/MyNavbar";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "../components/providers/nextUI/ThemeProvider";
import AuthProvider from "@/components/providers/auth/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <MyNavbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}