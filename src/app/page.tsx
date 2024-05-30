import MobileHomePage from "@/devices/mobile/pages/Homepage/page";
import DesktopHomePage from "@/devices/desktop/pages/Homepage/page"

export default function Home(): React.ReactNode {
    return(
        <>
            <MobileHomePage />
            <DesktopHomePage/>
        </>
    )
}
