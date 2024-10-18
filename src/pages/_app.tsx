import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css"; // Ensure the path is correct
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app"; // Import AppProps for typing

function MyApp({ Component, pageProps }: AppProps) { // Correctly type the props
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
