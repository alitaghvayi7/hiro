import Image from "next/image";
import ImageOne from "@/assets/images/advertise/Frame12-lg.png";
import ImageTwo from "@/assets/images/introduction/image1-lg.png";
import VideoImage from "@/assets/images/advertise/Frame12.png";
import {Separator} from "@/components/ui/seprator";
import ChartComponent from "@/devices/mobile/components/AdvertisePage/ChartComponent";
import MobileFooter from "@/devices/mobile/components/common/MobileFooter";
import {Link} from "@/navigation";
import {cn} from "@/lib/utils/cn";
import {buttonVariants} from "@/components/ui/button";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import RootLayout from "@/devices/desktop/layouts/RootLayout";
import DesktopFooter from "@/devices/desktop/components/common/DesktopFooter";
import ClientSectionMotion from "@/components/providers/ClientSectionMotion";

export default function AdvertisePage() {
    // @ts-ignore
    return (
        <>
            <RootLayout>
                <div
                    className="w-full bg-transparent relative isolate hidden lg:block">

                    <div className={`!h-[calc(100vh-92px)] w-full flex flex-col gap-12 my-10 relative isolate`}>
                        <ClientSectionMotion
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true }}
                            transition={{duration: 1, delay: .3}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                        >
                            <p className={`text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                                simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy
                                text
                                of the printing and typesetting industry
                                <br/> <br/>

                                .Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </ClientSectionMotion>

                        <ClientSectionMotion
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true }}
                            transition={{duration: 1, delay: .3}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                        >
                            <div className={`ps-8 flex items-center gap-[220px]`}>
                                <Separator orientation={`vertical`}
                                           className={`bg-[#FFFFFF33] min-h-[175px] h-[50%] max-h-[576px]`}/>
                                <h1 className={`text-[150px] text-yellow-100 font-[100] tracking-[2rem] italic font-taviraj`}>
                                    Advertise
                                </h1>
                            </div>
                        </ClientSectionMotion>

                        <div
                            className={`max-w-[662px] max-h-[650px] w-full h-full absolute bottom-[10%] right-[10%] z-[-1] isolate flex items-center justify-center rotate-animation`}>
                            <Image
                                src={ImageTwo}
                                alt=""
                                className="object-contain w-full h-full absolute inset-0 z-[-1]"
                            />

                        </div>
                    </div>

                    <div className={`flex flex-col w-full`}>
                        <ClientSectionMotion
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeInOut', delay: .3}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                        >
                            <p className={`text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins mt-[5rem]`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                                simply dummy text of the printing and typesetting industry.
                            </p>
                        </ClientSectionMotion>

                        <ClientSectionMotion
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeInOut', delay: .3}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                            className={`self-end text-right rtl:text-left`}
                        >
                            <p className={` text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins my-[146px]`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                                simply dummy text of the printing and typesetting industry.
                            </p>
                        </ClientSectionMotion>

                        <ClientSectionMotion
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeInOut', delay: .3}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                        >
                            <div className={`flex items-center justify-between`}>
                                <div>
                                    <h2 className={`text-[67px] font-[300] text-yellow-100 font-taviraj`}>
                                        Creatively
                                    </h2>
                                    <p className={`self-end text-[#FFFFFFCC] text-[20px] font-[300] max-w-[436px] break-words font-poppins mt-10`}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum
                                        is
                                        simply dummy text of the printing and typesetting industry.
                                        <br/> <br/>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum
                                        is
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
                        </ClientSectionMotion>

                        <ClientSectionMotion
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeInOut', delay: .3}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                        >
                            <div className={`flex items-center justify-between mt-[128px]`}>
                                <div
                                    className={`flex w-[60%] h-[80%] max-w-[888px] max-h-[499px] rounded-[16px] items-center justify-center overflow-hidden`}>
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
                                        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum
                                        is
                                        simply dummy text of the printing and typesetting industry.
                                        <br/> <br/>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum
                                        is
                                        simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </ClientSectionMotion>
                        <Separator className={`w-full bg-[#FFFFFF33] mt-[64px]`}/>
                    </div>

                    <DesktopFooter/>

                </div>
            </RootLayout>
        </>

    )
}