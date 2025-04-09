import "./globals.css";
import Head from "./head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Food Repo",
  description: "Get a new idea for your next meal",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head/>
      <body>
        {/* <div id="portal" /> */}
        <div id="app">
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
