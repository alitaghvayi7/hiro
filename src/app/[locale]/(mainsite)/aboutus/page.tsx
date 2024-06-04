import DesktopAboutusPage from "@/devices/desktop/pages/AboutusPage/page"
import {locales} from "@/navigation";
import {unstable_setRequestLocale} from "next-intl/server";

export default function AboutusPage({params: {locale}}: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    return (
        <>
            <DesktopAboutusPage/>
        </>
    )
}