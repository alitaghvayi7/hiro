import Image from "next/image";
import ImageOne from "@/assets/images/introduction/first_step_image.png";
import VideoImage from "@/assets/images/advertise/Frame12.png";
import {Separator} from "@/components/ui/seprator";
import ChartComponent from "@/devices/mobile/components/AdvertisePage/ChartComponent";
import MobileFooter from "@/devices/mobile/components/common/MobileFooter";
import Link from "next/link";
import {cn} from "@/lib/utils/cn";
import {buttonVariants} from "@/components/ui/button";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";

export default function AdvertisePage() {
    // @ts-ignore
    return (
        <>
            <section
                className="w-screen min-h-screen overflow-hidden overflow-y-auto bg-gradient-to-b from-[#024343] to-[#001212]">
                <div className={`w-full flex items-center justify-between pt-4 px-6`}>
                    <Link
                        href={'/'}
                        className={cn(buttonVariants({variant: "outline"}), 'w-10 h-10 text-white rounded-[8px] font-poppins')}
                    >
                        <ArrowLeftIcon className={`w-5 h-5`}/>
                    </Link>

                    <span
                        className={`text-white font-poppins font-medium leading-6 text-[16px] cursor-pointer flex`}>
                        EN  /  FA
                  </span>
                </div>

                <div className={`w-full h-[315px] flex items-center relative isolate rotate-animation`}>
                    <div
                        className={` absolute top-0 right-[-35%] w-[327px] h-[315px] z-[-1] isolate flex items-center justify-center rotate-animation`}>
                        <Image
                            src={ImageOne}
                            alt=""
                            className="object-cover w-full h-full absolute inset-0 z-[-1]"
                        />

                    </div>

                    <div
                        className={`w-[106px] h-[106px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] opacity-50 absolute top-[-30px] left-[4%] z-[1] backdrop-blur-[1px]`}></div>
                    <div
                        className={`w-[78px] h-[78px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] opacity-50 absolute bottom-[0] left-[-4%] z-[1] backdrop-blur-[1px]`}></div>


                    <h1 className={`font-taviraj font-[200] text-yellow-100 text-[48px] ps-6 italic`}>
                        Advertise
                    </h1>
                </div>

                <div className={`w-[calc(100%-3rem)] mx-auto overflow-x-hidden`}>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px]`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry
                    </p>
                    <Separator orientation="vertical" className={`h-[48px] bg-[#FFFFFF33] my-4`}/>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px]`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.
                    </p>
                    <h2 className={`font-taviraj font-[300] text-yellow-100 text-[40px] my-4`}>
                        Creatively
                    </h2>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px]`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px] my-6`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                    <div className={`w-full border border-[#FFFFFF33] rounded-[8px] h-[295px]`}>
                        <div className={`w-full flex flex-col items-end px-8`}>
                            <h5 className={`font-roboto text-yellow-100 uppercase text-[12px] font-[700] mt-4`}>Primary
                                Text</h5>
                            <span className={`font-poppins text-white text-[24px] font-[700]`}>5.987,37</span>
                            <h5 className={`font-roboto text-yellow-100 uppercase text-[12px] font-[400] mb-4`}>Secondary
                                text</h5>
                        </div>
                        <Separator className={`bg-[#FFFFFF33]`}/>
                        <div className={`w-full p-4`}>
                            <ChartComponent/>
                        </div>
                    </div>
                    <p className={`w-full text-center text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px] my-6`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry
                    </p>
                    <h2 className={`font-taviraj font-[300] text-yellow-100 text-[40px] my-4 text-end`}>
                        Beyond
                    </h2>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px] my-6 text-end`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry
                    </p>
                    <Image src={VideoImage} alt={''}
                           className={`rounded-[16px] w-[90%] h-[165px] object-cover mx-auto`}/>
                    <Separator className={`my-8 bg-[#FFFFFF33]`}/>
                    <MobileFooter/>
                </div>
            </section>
        </>

    )
}