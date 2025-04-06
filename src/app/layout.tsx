import "@/app/globals.css"
import { ThemeProvider } from "../components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google'
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OPENShelter",
  description: "Empowering the Stateless with Identity, Trust, and Financial Freedom",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
