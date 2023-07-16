"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children
}: {
  children: React.ReactNode      //destructuring childeren property 
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent head.tsx.
      */}
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

