import { HomeIcon } from "@heroicons/react/24/solid"
import MapImage from "@/assets/images/introduction/mp-image.png"
import Image from "next/image"
import Link from "next/link"


function AboutusPage() {
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
                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4" dir="ltr">
                        <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>office 1</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}>021-4789561</span>
                    </div>

                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4" dir="ltr">
                        <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>Office 2</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}>025-9874561</span>
                    </div>


                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4" dir="ltr">
                        <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>Phone</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}>09100587498</span>
                    </div>


                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4" dir="ltr">
                        <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>Email</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}>example@gmail.com</span>
                    </div>


                    <div className="w-full flex items-center justify-between h-[56px] rounded-[8px] p-4" dir="ltr">
                        <span className={`font-poppins text-[14px] text-[#FFFFFF33] font-[400]`}>Instagram</span>
                        <span className={`font-poppins text-[14px] text-white font-[400]`}>@Iraneziba</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusPage