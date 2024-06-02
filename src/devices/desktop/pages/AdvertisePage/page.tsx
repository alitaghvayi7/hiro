import Image from "next/image";
import ImageOne from "@/assets/images/advertise/Frame12-lg.png";
import VideoImage from "@/assets/images/advertise/Frame12.png";
import {Separator} from "@/components/ui/seprator";
import ChartComponent from "@/devices/mobile/components/AdvertisePage/ChartComponent";
import MobileFooter from "@/devices/mobile/components/common/MobileFooter";
import Link from "next/link";
import {cn} from "@/lib/utils/cn";
import {buttonVariants} from "@/components/ui/button";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import RootLayout from "@/devices/desktop/layouts/RootLayout";

export default function AdvertisePage() {
    // @ts-ignore
    return (
        <>
            <RootLayout>
                <div
                    className="w-full bg-transparent relative isolate hidden lg:block">
                    <div className={`!h-[calc(100vh-92px)] w-full flex flex-col gap-12 my-10`}>
                        <p className={`text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry
                            <br/> <br/>

                            .Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className={`ps-8 flex items-center gap-[220px]`}>
                            <Separator orientation={`vertical`}
                                       className={`bg-[#FFFFFF33] min-h-[175px] h-[50%] max-h-[576px]`}/>
                            <h1 className={`text-[150px] text-yellow-100 font-[200] tracking-[2rem] italic font-taviraj`}>
                                Advertise
                            </h1>
                        </div>
                    </div>

                    <div className={`flex flex-col w-full`}>
                        <p className={`text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins mt-[5rem]`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry.
                        </p>
                        <p className={`self-end text-right rtl:text-left text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins my-[146px]`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className={`flex items-center justify-between`}>
                            <div>
                                <h2 className={`text-[67px] font-[300] text-yellow-100 font-taviraj`}>
                                    Creatively
                                </h2>
                                <p className={`self-end text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins mt-10`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry.
                                    <br/> <br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            <div className={`flex self-end`}>
                                <div className={`w-[436px] border border-[#FFFFFF33] rounded-[8px]`}>
                                    <div className={`w-full flex flex-col items-end px-8`}>
                                        <h5 className={`font-roboto text-yellow-100 uppercase text-[12px] font-[700] mt-4`}>Primary
                                            Text</h5>
                                        <span
                                            className={`font-poppins text-white text-[24px] font-[700]`}>5.987,37</span>
                                        <h5 className={`font-roboto text-yellow-100 uppercase text-[12px] font-[400] mb-4`}>Secondary
                                            text</h5>
                                    </div>
                                    <Separator className={`bg-[#FFFFFF33]`}/>
                                    <div className={`w-full p-4`}>
                                        <ChartComponent/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex items-center justify-between mt-[128px]`}>
                            <div className={`flex w-[60%] h-[80%] max-w-[888px] max-h-[499px] rounded-[16px] items-center justify-center overflow-hidden`}>
                                <Image
                                    src={ImageOne}
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <h2 className={`text-[67px] font-[300] text-yellow-100 font-taviraj text-right`}>
                                    Creatively
                                </h2>
                                <p className={`self-end text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins mt-10 text-right`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry.
                                    <br/> <br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <Separator className={`w-full bg-[#FFFFFF33] mt-[64px]`}/>
                    </div>

                </div>
            </RootLayout>
        </>

    )
}