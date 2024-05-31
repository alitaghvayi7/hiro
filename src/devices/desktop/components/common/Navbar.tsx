import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/images/logo-lg.png"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <>

            <nav
                className={` w-full h-[60px] bg-transparent flex mt-8 items-center gap-[294px] justify-between relative z-[-10] isolate`}>
                <div className={`flex items-center gap-[94px]`}>
                    <Image src={Logo} alt={''} className={`h-[60px] w-[40px] drop-shadow-sm object-cover`} />
                    <Menu />
                </div>
                <div className={`flex items-center gap-10`}>
                    <span
                        className={`text-white font-poppins font-[300] text-[16px] cursor-pointer`}>
                        EN  /  FA
                    </span>
                    <Button
                        variant={'outline'}
                        className={`border-yellow-100 text-yellow-100 w-[154px] rounded-[8px] h-[40px]`}
                    >
                        <span className={`text-[16px]`}>
                            Catalog
                        </span>
                        <ArrowDownTrayIcon className={`w-5 h-5`} />
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar