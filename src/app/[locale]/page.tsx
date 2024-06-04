import MobileHomePage from "@/devices/mobile/pages/Homepage/page";
import DesktopHomePage from "@/devices/desktop/pages/Homepage/page"
// import {useTranslations} from "next-intl";

export default function Home(): React.ReactNode {
    // const t = useTranslations('Index');

    return(
        <>
            {/*{t('title')}*/}
            <MobileHomePage />
            <DesktopHomePage/>
        </>
    )
}
