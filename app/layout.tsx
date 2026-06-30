import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "PhoenixGold Game Studios | Trevor Hicks",
  description:
    "Portfolio of Trevor Hicks, founder of PhoenixGold Game Studios and creator of Eucalyptus Edge, a family-friendly 3D weapon-based fighting game built in Unreal Engine 5.8.",
  keywords: [
    "Trevor Hicks",
    "PhoenixGold Game Studios",
    "Eucalyptus Edge",
    "Unreal Engine 5.8",
    "game developer",
    "indie game studio",
    "portfolio",
  ],
  authors: [{ name: "Trevor Hicks" }],
  creator: "Trevor Hicks",
  openGraph: {
    title: "PhoenixGold Game Studios | Eucalyptus Edge",
    description:
      "Creating family-friendly games with competitive gameplay, vibrant worlds, and lovable characters.",
    type: "website",
    locale: "en_US",
    siteName: "PhoenixGold Game Studios",
    images: [
      {
        url: "/Images/EE_Banner1920x1080.png",
        width: 1920,
        height: 1080,
        alt: "Eucalyptus Edge banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhoenixGold Game Studios | Trevor Hicks",
    description:
      "Founder of PhoenixGold Game Studios and creator of Eucalyptus Edge.",
    images: ["/Images/EE_Banner1920x1080.png"],
  },
  icons: {
    icon: "/Images/Logo2026.png",
    shortcut: "/Images/Logo2026.png",
    apple: "/Images/Logo2026.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffb347",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
