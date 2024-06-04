import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { Link } from "@/navigation"
import Logo from "@/assets/images/logo-lg.png"
import HirooTextLogo from '@/assets/images/hiroo-text-logo.svg';
import Menu from "./Menu"
import { useTranslate } from "@/lib/hooks/useTranslate";
import LanguageDropdown from "@/devices/desktop/components/common/LanguageDropdown";


const Navbar = () => {
    const translate = useTranslate('menu')

    return (
        <>

            <nav
                className={` w-full h-[60px] bg-transparent flex mt-8 items-center gap-[294px] justify-between relative z-[-10] isolate`}>
                <div className={`flex items-center gap-4 justify-center`}>
                    <Image src={Logo} alt={''} className={`h-[60px] w-[40px] drop-shadow-sm object-cover`} />
                    <Image src={HirooTextLogo} alt={''} className={`h-[18px] w-[60px] drop-shadow-sm object-cover`} />
                </div>
                <Menu />
                <div className={`flex items-center gap-10`}>
                    <LanguageDropdown />
                    <Button
                        variant={'outline'}
                        className={`border-yellow-100 text-yellow-100 w-[154px] rounded-[8px] h-[40px] gap-1 flex font-poppins text-base font-light`}
                    >
                        <span className={`text-[16px]`}>
                            {translate('catalog')}
                        </span>
                        <ArrowDownTrayIcon className={`w-5 h-5`} />
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar