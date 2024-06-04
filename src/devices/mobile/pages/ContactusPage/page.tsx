import { HomeIcon } from "@heroicons/react/24/solid"
import MapImage from "@/assets/images/introduction/mp-image.png"
import Image from "next/image"
import {Link} from "@/navigation"
import {useTranslate} from "@/lib/hooks/useTranslate";


function ContactusPage() {

    const translate = useTranslate('contact')

    return (
        <section className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] block lg:hidden">
            <div
                className={`w-full max-w-[326px] mx-auto fixed bottom-6 left-6 right-6 flex items-center justify-between z-[10]`}>
                <span className="text-white poppins-medium text-[16px] cursor-pointer">
                    EN  /  FA
                </span>
                <div className={`flex items-center gap-2`}>
                    <Link
                        href={'/'}
                        className={`w-8 h-8 rounded-[4px] border border-white flex items-center justify-center`}>
                        <HomeIcon className="w-4 h-4 text-white" />
                    </Link>
                </div>
            </div>


            <div className={`w-full max-w-[326px] h-[calc(100%-105px)] mx-auto relative isolate overflow-hidden overflow-y-auto m-8 bg-transparent flex flex-col items-center`}>
                <Image alt='' src={MapImage} className={`w-full h-[326px] object-cover rounded-[16px]`} />
                <div className="w-full about-us-table">
                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                        <span
                            className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('first.title')}</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}
                              dir={'ltr'}>{translate('first.value')}</span>
                    </div>

                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                        <span
                            className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('second.title')}</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}
                              dir={'ltr'}>{translate('second.value')}</span>
                    </div>


                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                        <span
                            className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('third.title')}</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}
                              dir={'ltr'}>{translate('third.value')}</span>
                    </div>


                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                        <span
                            className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('fourth.title')}</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}
                              dir={'ltr'}>{translate('fourth.value')}</span>
                    </div>


                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4">
                        <span
                            className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>{translate('fifth.title')}</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}
                              dir={'ltr'}>{translate('fifth.value')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactusPage