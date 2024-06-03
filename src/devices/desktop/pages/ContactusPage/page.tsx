import { HomeIcon } from "@heroicons/react/24/solid"
import MapImage from "@/assets/images/introduction/mp-image.png"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic";
// import RootLayout from "../../layouts/RootLayout"
const RootLayout = dynamic(()=>import("../../layouts/RootLayout"),{ssr:false})


function ContactusPage() {
    return (
        <RootLayout>
            <div className="w-full !h-[calc(100vh-92px)] bg-transparent overflow-hidden relative isolate hidden lg:flex items-center justify-center">
                <div className={`w-full max-w-[1190px] h-full mx-auto relative isolate overflow-hidden overflow-y-auto bg-transparent flex items-center justify-around`}>
                    <Image alt='' src={MapImage} className={`w-[349px] h-[349px] object-cover rounded-[16px]`} />
                    <div className="w-full max-w-[587px] about-us-table">
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
            </div>
        </RootLayout>
    )
}

export default ContactusPage