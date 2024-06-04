
import MobileAdvertisePage from "@/devices/mobile/pages/AdvertisePage/page"
import DesktopAdvertisePage from "@/devices/desktop/pages/AdvertisePage/page"
import {unstable_setRequestLocale} from "next-intl/server";

export default function AdvertisePage({params: {locale}}: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    return (
        <>
            <DesktopAdvertisePage />
            <MobileAdvertisePage />
        </>

    )
}