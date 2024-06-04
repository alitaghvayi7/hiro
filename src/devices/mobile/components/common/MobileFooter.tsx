import Image from "next/image";
import HiroLogo from "@/assets/images/hiro-logo-sm.png";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";


const MobileFooter = () => {
    return (
        <footer className={`w-full pb-6 grid grid-cols-5 items-start`}>
            <div className={`flex items-center justify-center w-full col-span-1`}>
                <Image src={HiroLogo} alt={''} className={`object-cover w-[45px] h-[70px]`} />
            </div>
            <div className={`flex flex-col items-start justify-between w-full col-span-4 gap-8 pl-9`}>
                <div className="flex flex-col gap-4">

                    <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px]`}>About Us</h5>
                    <div className={`flex flex-col justify-between h-full gap-1.5`}>
                        <span
                            className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">

                    <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px]`}>Links</h5>
                    <div className={`flex flex-col justify-between h-full gap-1.5`}>
                        <span
                            className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h5 className={`font-poppins font-[500] text-yellow-100 text-[14px] `}>Contact Us</h5>
                    <div className={`flex flex-col justify-between h-full gap-2`}>
                        <div className={`flex items-center justify-start gap-2`}>
                            <div
                                className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                                <PhoneIcon className={`w-[10px] h-[10px]`} />
                            </div>
                            <span
                                className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 max-w-[135px] block`}>
                                0901254789
                            </span>
                        </div>

                        <div className={`flex items-center justify-start gap-2`}>
                            <div
                                className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                                <EnvelopeIcon className={`w-[10px] h-[10px]`} />
                            </div>
                            <span
                                className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}>
                                example@gmail.com
                            </span>
                        </div>

                        <div className={`flex items-center justify-start gap-2`}>
                            <div
                                className={`border rounded-[4px] border-[#FFFFFFCC] w-4 h-4 flex items-center justify-center text-[#FFFFFFCC]`}>
                                <MapPinIcon className={`w-[10px] h-[10px]`} />
                            </div>
                            <span
                                className={`font-poppins font-[300] text-[#FFFFFFCC] text-[12px] leading-4 block`}>
                                Iran, Tehran, Azadi street
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MobileFooter