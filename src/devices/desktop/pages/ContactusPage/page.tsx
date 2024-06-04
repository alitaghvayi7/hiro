import { HomeIcon } from "@heroicons/react/24/solid"
import MapImage from "@/assets/images/introduction/mp-image.png"
import Image from "next/image"
import {Link} from "@/navigation"
import dynamic from "next/dynamic";
import {useTranslate} from "@/lib/hooks/useTranslate";
// import RootLayout from "../../layouts/RootLayout"
const RootLayout = dynamic(()=>import("../../layouts/RootLayout"),{ssr:false})


function ContactusPage() {
    const translate = useTranslate('contact')
    return (
        <RootLayout>
            <div className="w-full !h-[calc(100vh-92px)] bg-transparent overflow-hidden relative isolate hidden lg:flex items-center justify-center">
                <div className={`w-full max-w-[1190px] h-full mx-auto relative isolate overflow-hidden overflow-y-auto bg-transparent flex items-center justify-around`}>
                    <Image alt='' src={MapImage} className={`w-[349px] h-[349px] object-cover rounded-[16px]`} />
                    <div className="w-full max-w-[587px] about-us-table">
                        <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                            <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('first.title')}</span>
                            <span className={`font-poppins text-[14px] text-white font-[400]`} dir={'ltr'}>{translate('first.value')}</span>
                        </div>

                        <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                            <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('second.title')}</span>
                            <span className={`font-poppins text-[14px] text-white font-[400]`} dir={'ltr'}>{translate('second.value')}</span>
                        </div>


                        <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                            <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('third.title')}</span>
                            <span className={`font-poppins text-[14px] text-white font-[400]`} dir={'ltr'}>{translate('third.value')}</span>
                        </div>


                        <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                            <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('fourth.title')}</span>
                            <span className={`font-poppins text-[14px] text-white font-[400]`} dir={'ltr'}>{translate('fourth.value')}</span>
                        </div>


                        <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                            <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('fifth.title')}</span>
                            <span className={`font-poppins text-[14px] text-white font-[400]`} dir={'ltr'}>{translate('fifth.value')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default ContactusPage