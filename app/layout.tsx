'use client';

import type { Metadata } from "next";
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, initializing)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust the duration (in milliseconds) as needed (e.g., 2500ms = 2.5s)

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {
          loading ? (
            <Preloader />
          ) : (
            <>
              {children}
            </>
          )
        }
      </body>
    </html>
  );
}
