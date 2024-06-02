import type {Metadata, Viewport} from "next";
import {Poppins, Taviraj, Roboto} from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
// import TransitionProvider from "@/components/providers/TransitionProvider";
const TransitionProvider = dynamic(()=>import('@/components/providers/TransitionProvider'),{ssr:false})
import {cn} from "@/lib/utils/cn";
// import { appWithTranslation } from '../../i18n';
import {NextIntlClientProvider, useTranslations} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getDictionary} from "@/dictionary";
import {Locale} from "@/types/dictionary";
import {locales} from "@/middleware";
import dynamic from "next/dynamic";

const taviraj = Taviraj({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    preload: true,
    subsets: ['latin'],
    style: ['italic', 'normal'],
    variable: '--font-taviraj'
});

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    preload: true,
    subsets: ['latin'],
    style: ['italic', 'normal'],
    variable: '--font-roboto'
});

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    preload: true,
    subsets: ['latin'],
    variable: '--font-poppins'
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

export async function generateStaticParams() {
  return locales.map((locale) => ({
    lang: locale,
  }));
}



async function RootLayout(
    {
        children,
        params: { lang },
    }: {
        children: React.ReactNode;
        params: { lang: Locale };
    }) {

    const message = await getDictionary(
        locales.find((item) => item === lang) ?? locales[0]
    );

    console.log(message)

    return (
        <html lang={`${lang}`} dir={['fa', 'ar'].includes(lang) ? 'rtl' : 'ltr'}>
        <body
            className={cn("bg-gradient-to-b from-[#024343] to-[#001212]", taviraj.variable, poppins.variable, roboto.variable)}>
        {/*<NextIntlClientProvider messages={messages}>*/}
            <NextTopLoader
                color={"#FFE9A6"}
                showSpinner={false}
                height={1}
            />
            <TransitionProvider>
                {children}
            </TransitionProvider>
        {/*</NextIntlClientProvider>*/}
        </body>
        </html>
    );
}


export default RootLayout;