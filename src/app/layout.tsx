import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Indy Singh | AI & Engineering Portfolio",
  description: "Portfolio of Indy Singh — senior engineer and AI/ML enthusiast showcasing projects, skills, and certifications.",
  keywords: "Indy Singh, AI engineer, machine learning, portfolio, software engineer, Next.js, data engineering",
  authors: [{ name: "Indy Singh" }],
  creator: "Indy Singh",
  publisher: "Indy Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://indy-singh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indy Singh | AI & Engineering Portfolio",
    description: "Portfolio of Indy Singh — senior engineer and AI/ML enthusiast showcasing projects, skills, and certifications.",
    url: "https://indy-singh.com",
    siteName: "Indy Singh Portfolio",
    images: [
      {
        url: "/indy.jpeg",
        width: 1200,
        height: 630,
        alt: "Indy Singh - AI & Engineering Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indy Singh | AI & Engineering Portfolio",
    description: "Portfolio of Indy Singh — senior engineer and AI/ML enthusiast showcasing projects, skills, and certifications.",
    images: ["/indy.jpeg"],
    creator: "@indysingh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/indy.jpeg" as="image" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Indy Singh",
              url: "https://indy-singh.com",
              sameAs: [
                "https://www.linkedin.com/in/indy-singh-88986617/",
                "https://github.com/indy86-collab",
              ],
              jobTitle: "Senior Engineer | AI & ML Enthusiast",
              image: "/indy.jpeg",
              description:
                "Senior engineer and AI/ML enthusiast with over a decade of experience in building, supporting, and scaling technology solutions.",
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Software Engineering",
                "Data Engineering",
                "Adobe Commerce",
                "ServiceNow",
                "Cloud Infrastructure",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Adobe",
              },
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
