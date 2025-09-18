import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://new-portfolio.vercel.app/"),

  title: "Sebastián Osorio | Full-Stack Developer",
  authors: {
    name: "Sebastián Osorio",
  },

  description:
    "Personal portfolio of Sebastián Osorio, Full-Stack Developer from Colombia. Showcasing skills, projects, and certifications with React, Next.js, Node.js, and PostgreSQL.",

  openGraph: {
    title: "Sebastián Osorio | Full-Stack Developer",
    description:
      "Portfolio of Sebastián Osorio, a Full-Stack Developer specialized in React, Next.js, Node.js, and PostgreSQL.",
    url: "https://new-portfolio.vercel.app/",
    siteName: "Sebastián Osorio Portfolio",
    images: "/newPortfolio.png",
    type: "website",
  },

  keywords: [
    "Sebastián Osorio",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js",
    "PostgreSQL",
    "Web Developer Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
