"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WelcomeScreen from "./components/welcomeScreen"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // ✅ First visit → show welcome screen
      setShowWelcome(true);

      // After welcome screen is done → mark as visited
      setTimeout(() => {
        setShowWelcome(false);
        localStorage.setItem("hasVisited", "true");
      }, 7000); // match your welcome screen duration
    } else {
      // ✅ Already visited → skip welcome
      setShowWelcome(false);
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {showWelcome ? (
          <WelcomeScreen setShowWelcome={setShowWelcome} />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
