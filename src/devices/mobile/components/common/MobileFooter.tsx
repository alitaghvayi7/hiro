import Image from "next/image";
import HiroLogo from "@/assets/images/hiro-logo-sm.png";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useTranslate } from "@/lib/hooks/useTranslate";


const MobileFooter = () => {
    const translate = useTranslate('footer')
    return (
        <footer className={`w-full pb-6 grid grid-cols-5 items-start`}>
            <div className={`flex items-center justify-center w-full col-span-1`}>
                <Image src={HiroLogo} alt={''} className={`object-cover w-[45px] h-[70px]`} />
            </div>
            <div className={`flex flex-col items-start justify-between w-full col-span-4 gap-8 pl-9`}>
                <div className="flex flex-col gap-4">

                    <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px]`}>{translate("about.title")}</h5>
                    <div className={`flex flex-col justify-between h-full gap-1.5`}>
                        <span
                            className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                            {translate("about.description")}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">

                    <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px]`}>{translate('links.title')}</h5>
                    <div className={`flex flex-col justify-between h-full gap-1.5`}>
                        <span
                            className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                            {translate('links.home')}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px] `}>{translate('contact.title')}</h5>
                    <div className={`flex flex-col justify-between h-full gap-2`}>
                        <div className={`flex items-center justify-start gap-2`}>
                            <div
                                className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                                <PhoneIcon className={`w-[10px] h-[10px]`} />
                            </div>
                            <span
                                className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                                {translate('contact.phone')}
                            </span>
                        </div>

                        <div className={`flex items-center justify-start gap-2`}>
                            <div
                                className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                                <EnvelopeIcon className={`w-[10px] h-[10px]`} />
                            </div>
                            <span
                                className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}>
                                {translate('contact.email')}
                            </span>
                        </div>

                        <div className={`flex items-center justify-start gap-2`}>
                            <div
                                className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                                <MapPinIcon className={`w-[10px] h-[10px]`} />
                            </div>
                            <span
                                className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}>
                                {translate('contact.address')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MobileFooter