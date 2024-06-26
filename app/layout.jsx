import { Inter } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landry Ouarma||Full-Stack Developer",
  description: "Portfolio of Landry Ouarma alias Kill_m0nger27 designed by and for himself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute = 'class' defaultTheme='dark'>

          <Header />
          {children}
          <Footer />
          
        </ThemeProvider>
      </body>
        
    </html>
  );
}
