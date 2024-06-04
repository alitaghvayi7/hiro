
import MobileAboutusPage from "@/devices/mobile/pages/AboutusPage/page"
import DesktopAboutusPage from "@/devices/desktop/pages/ContactusPage/page"
import {unstable_setRequestLocale} from "next-intl/server";

function ContactusPage({params: {locale}}: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    return (
        <>
            <MobileAboutusPage />
            <DesktopAboutusPage />
        </>
    )
}

export default ContactusPage