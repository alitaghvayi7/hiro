
import MobileContactusPage from "@/devices/mobile/pages/ContactusPage/page"
import DesktopContactusPage from "@/devices/desktop/pages/ContactusPage/page"
import {unstable_setRequestLocale} from "next-intl/server";

function ContactusPage({params: {locale}}: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    return (
        <>
            <MobileContactusPage />
            <DesktopContactusPage />
        </>
    )
}

export default ContactusPage