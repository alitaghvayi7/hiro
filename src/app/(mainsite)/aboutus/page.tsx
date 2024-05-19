import { HomeIcon } from "@heroicons/react/24/solid"
import MapImage from "@/assets/images/introduction/mp-image.png"
import Image from "next/image"
import Link from "next/link"


function aboutus() {
    return (
        <section className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212]">
            <div
                className={` w-[calc(100%-3rem)] fixed bottom-6 left-6 right-6 flex items-center justify-between z-[10]`}>
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


            <section className={`w-full max-w-[326px] mx-auto relative isolate overflow-hidden p-8 bg-transparent flex flex-col items-center justify-center`}>
                <Image alt='' src={MapImage} className={`w-full h-[326px] object-cover rounded-[16px]`} />
            </section>
        </section>
    )
}

export default aboutus