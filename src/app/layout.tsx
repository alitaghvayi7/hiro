import type { Metadata, Viewport } from "next";
import {Inter, Poppins, Taviraj} from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import TransitionProvider from "@/components/providers/TransitionProvider";
import {cn} from "@/lib/utils/cn";

export const taviraj = Taviraj({
  weight: ['100', '200', '300', '400', '500', '600'],
  preload: true,
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable:'--font-taviraj'
});

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600'],
  preload: true,
  subsets: ['latin'],
      variable:'--font-poppins'
});

const APP_NAME = "Hiroo";
const APP_DEFAULT_TITLE = "Hiroo";
const APP_TITLE_TEMPLATE = "%s - Hiroo";
const APP_DESCRIPTION = "Hiroo app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("",taviraj.variable,poppins.variable)}>
        <NextTopLoader
          color={"#FFE9A6"}
          showSpinner={false}
          height={1}
        />
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
