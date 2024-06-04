import type { Metadata, Viewport } from "next";
import { Poppins, Taviraj, Roboto } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";
const TransitionProvider = dynamic(() => import('@/components/providers/TransitionProvider'), { ssr: false })
import { cn } from "@/lib/utils/cn";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local'
import {locales} from "@/navigation";

const iransans = localFont({
    src: [
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_UltraLight.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_UltraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_Bold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_Black.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/IRANSansWeb_FaNum_Black.ttf",
            weight: "900",
            style: "normal",
        }
    ],
    preload: true,
    variable: '--font-iransans'
});


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
};

export const viewport: Viewport = {
    themeColor: "#FFFFFF",
};


export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

async function RootLayout(
    {
        children,
        params: { locale }
    }: {
        children: React.ReactNode;
        params: { locale: string };
    }) {

    const messages = await getMessages();


    let font = null;

    if (locale !== 'fa') {
        font = taviraj.variable + " " + poppins.variable + " " + roboto.variable
    } else {
        font = iransans.variable
    }

    return (
        <html lang={`${locale}`} dir={['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr'}>
            <body
                className={cn("bg-gradient-to-b from-[#024343] to-[#001212]", font)}>
                <NextIntlClientProvider messages={messages}>
                    <NextTopLoader
                        color={"#FFE9A6"}
                        showSpinner={false}
                        height={1}
                    />
                    <TransitionProvider>
                        {children}
                    </TransitionProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}


export default RootLayout;