import MobileHomePage from "@/devices/mobile/pages/Homepage/page";
import DesktopHomePage from "@/devices/desktop/pages/Homepage/page"
import {unstable_setRequestLocale} from "next-intl/server";
// import {useTranslations} from "next-intl";

export default function Home({params: {locale}}: { params: { locale: string } }): React.ReactNode {
    // const t = useTranslations('Index');
    unstable_setRequestLocale(locale);
    return(
        <>
            {/*{t('title')}*/}
            <MobileHomePage />
            <DesktopHomePage/>
        </>
    )
}
