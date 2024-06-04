import Image from "next/image";
import HiroLogo from "@/assets/images/hiro-logo-sm.png";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {Link} from "@/navigation";
import {useTranslate} from "@/lib/hooks/useTranslate";


const DesktopFooter = () => {
    const translate = useTranslate('footer')
    return (
        <footer className={`w-full py-10 flex justify-between`}>

            <Image src={HiroLogo} alt={''} className={`object-cover w-[45px] h-[70px]`}/>
            <div className={`flex flex-col justify-between h-full gap-1.5`}>
                <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px]`}>{translate("about.title")}</h5>
                <span
                    className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                    {translate("about.description")}
                </span>
            </div>
            <div className={`flex flex-col justify-between items-center h-full gap-2`}>
                <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px] text-center`}>{translate('links.title')}</h5>
                <Link
                    href={'/'}
                    className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}
                >
                    {translate('links.home')}
                </Link>
                <Link
                    href={'/services'}
                    className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}
                >
                    {translate('links.services')}
                </Link>
                <Link
                    href={''}
                    className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}
                >
                    {translate('links.download')}
                </Link>
            </div>
            <div className={`flex flex-col justify-between h-full gap-2`}>
                <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px] ltr:text-end rtl:text-start`}>{translate('contact.title')}</h5>
                <div className={`flex items-center justify-end gap-2`}>
                        <span
                            className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                            {translate('contact.phone')}
                        </span>
                    <div
                        className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                        <PhoneIcon className={`w-[10px] h-[10px]`}/>
                    </div>
                </div>

                <div className={`flex items-center justify-end gap-2`}>
                        <span
                            className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}>
                            {translate('contact.email')}
                        </span>
                    <div
                        className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                        <EnvelopeIcon className={`w-[10px] h-[10px]`}/>
                    </div>
                </div>

                <div className={`flex items-center justify-end gap-2`}>
                        <span
                            className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}>
                            {translate('contact.address')}
                        </span>
                    <div
                        className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                        <MapPinIcon className={`w-[10px] h-[10px]`}/>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default DesktopFooter