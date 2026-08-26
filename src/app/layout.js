import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const BASE = "https://jeetux.vercel.app/"; 

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Indrajeet.in",
    template: "%s | Indrajeet Jadhav",
  },

  description:
    "Indrajeet Jadhav is a Product Designer and UX Designer specializing in enterprise UX, product design, user research, interaction design, and AI-assisted design workflows.",

  keywords: [
    "Indrajeet Jadhav",
    "Product Designer",
    "UX Designer",
    "Product Design",
    "Enterprise UX",
    "UX Strategy",
    "User Research",
    "Interaction Design",
    "Design Thinking",
    "AI-Assisted Design",
    "Portfolio",
  ],

  authors: [
    {
      name: "Indrajeet Jadhav",
      url: BASE,
    },
  ],

  creator: "Indrajeet Jadhav",
  publisher: "Indrajeet Jadhav",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Indrajeet Jadhav",
    title: "Indrajeet Jadhav — Product Designer & UX Designer",
    description:
      "Portfolio of Indrajeet Jadhav, a Product Designer specializing in enterprise UX, product design, user research, and interaction design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Indrajeet Jadhav — Product Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Indrajeet Jadhav — Product Designer & UX Designer",
    description:
      "Product Design and UX portfolio of Indrajeet Jadhav.",
    images: ["/og-image.png"],
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

  icons: {
    icon: [
      {
        url: "/photo/JeetLogo.svg",
        type: "image/png",
      },
    ],
    apple: "/photo/JeetLogo.svg",
    shortcut: "/photo/JeetLogo.svg",
  },

  alternates: {
    canonical: BASE,
  },

  category: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#080808" />
      </head>

      <body>
        <div className="bottom-blur" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}