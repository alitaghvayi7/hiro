import RootLayout from "@/devices/desktop/layouts/RootLayout";
import ClientSectionMotion from "@/components/providers/ClientSectionMotion";
import {Separator} from "@/components/ui/seprator";
import Image from "next/image";
import ImageTwo from "@/assets/images/introduction/image1-lg.png";
import ChartComponent from "@/devices/mobile/components/AdvertisePage/ChartComponent";
import ImageOne from "@/assets/images/advertise/Frame12-lg.png";
import DesktopFooter from "@/devices/desktop/components/common/DesktopFooter";
import {
    AcademicCapIcon,
    ChatBubbleOvalLeftEllipsisIcon, ClockIcon,
    LightBulbIcon,
    PresentationChartBarIcon, PresentationChartLineIcon, SwatchIcon
} from "@heroicons/react/24/outline";

export default function ServicesPage() {
    return (
        <>
            <RootLayout>
                <div
                    className="w-full bg-transparent relative isolate hidden lg:block">

                    <div className={`!h-[calc(100vh-92px)] w-full flex items-center justify-center relative isolate`}>
                        <h1 className={`text-[#F5C61A] font-[100] text-[150px] tracking-[.6rem] font-taviraj italic`}>
                            Our Services
                        </h1>
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
                            <div className={`w-full flex`}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#FFFFFFCC] to-[#FFFFFF00] backdrop-blur-[1px] flex items-center justify-center`}>
                                    <LightBulbIcon className={`text-yellow-500 w-10 h-10`}/>
                                </div>
                                <div className={`ps-12`}>
                                    <div className={`w-full flex items-center gap-6`}>
                                    <span
                                        className={`font-poppins font-thin text-[30px] text-[#FFFFFF33]`}>01</span>
                                        <h1 className={`text-[28px] text-yellow-100 font-[400] font-taviraj`}>
                                            Creative advertising
                                        </h1>
                                    </div>
                                    <p
                                        className={`text-[#FFFFFFCC] text-[20px] leading-8 max-w-[436px] drop-shadow-[0_4px_4px_#00000040] font-poppins font-light`}
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <Separator className={`bg-[#FFFFFF33] w-[73px] -rotate-45`}/>
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
                            <div className={`w-full flex self-end  my-12`} dir={'rtl'}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#FFFFFFCC] to-[#FFFFFF00] backdrop-blur-[1px] flex items-center justify-center`}>
                                    <ChatBubbleOvalLeftEllipsisIcon className={`text-yellow-500 w-10 h-10`}/>
                                </div>
                                <div className={`ps-12`}>
                                    <div className={`w-full flex items-center gap-6`}>
                                    <span
                                        className={`font-poppins font-thin text-[30px] text-[#FFFFFF33]`}>02</span>
                                        <h1 className={`text-[28px] text-yellow-100 font-[400] font-taviraj max-w-[254px]`}>
                                            What do people say
                                            about you
                                        </h1>
                                    </div>
                                    <p
                                        className={`text-[#FFFFFFCC] text-[20px] leading-8 max-w-[436px] drop-shadow-[0_4px_4px_#00000040] font-poppins font-light`}
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <Separator className={`bg-[#FFFFFF33] w-[183px] rotate-45`}/>
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
                            <div className={`w-full flex`}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#FFFFFFCC] to-[#FFFFFF00] backdrop-blur-[1px] flex items-center justify-center`}>
                                    <AcademicCapIcon className={`text-yellow-500 w-10 h-10`}/>
                                </div>
                                <div className={`ps-12`}>
                                    <div className={`w-full flex items-center gap-6`}>
                                    <span
                                        className={`font-poppins font-thin text-[30px] text-[#FFFFFF33]`}>03</span>
                                        <h1 className={`text-[28px] text-yellow-100 font-[400] font-taviraj`}>
                                            King of market
                                        </h1>
                                    </div>
                                    <p
                                        className={`text-[#FFFFFFCC] text-[20px] leading-8 max-w-[436px] drop-shadow-[0_4px_4px_#00000040] font-poppins font-light`}
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <Separator className={`bg-[#FFFFFF33] w-[153px] -rotate-45`}/>
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
                            <div className={`w-full flex self-end  my-12`} dir={'rtl'}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#FFFFFFCC] to-[#FFFFFF00] backdrop-blur-[1px] flex items-center justify-center`}>
                                    <PresentationChartBarIcon className={`text-yellow-500 w-10 h-10`}/>
                                </div>
                                <div className={`ps-12`}>
                                    <div className={`w-full flex items-center gap-6`}>
                                    <span
                                        className={`font-poppins font-thin text-[30px] text-[#FFFFFF33]`}>04</span>
                                        <h1 className={`text-[28px] text-yellow-100 font-[400] font-taviraj max-w-[254px]`}>
                                            Evolve your sales
                                        </h1>
                                    </div>
                                    <p
                                        className={`text-[#FFFFFFCC] text-[20px] leading-8 max-w-[436px] drop-shadow-[0_4px_4px_#00000040] font-poppins font-light`}
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <Separator className={`bg-[#FFFFFF33] w-[183px] rotate-45`}/>
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
                            <div className={`w-full flex`}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#FFFFFFCC] to-[#FFFFFF00] backdrop-blur-[1px] flex items-center justify-center`}>
                                    <PresentationChartLineIcon className={`text-yellow-500 w-10 h-10`}/>
                                </div>
                                <div className={`ps-12`}>
                                    <div className={`w-full flex items-center gap-6`}>
                                    <span
                                        className={`font-poppins font-thin text-[30px] text-[#FFFFFF33]`}>05</span>
                                        <h1 className={`text-[28px] text-yellow-100 font-[400] font-taviraj`}>
                                            Coherent and Structured
                                        </h1>
                                    </div>
                                    <p
                                        className={`text-[#FFFFFFCC] text-[20px] leading-8 max-w-[436px] drop-shadow-[0_4px_4px_#00000040] font-poppins font-light`}
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <Separator className={`bg-[#FFFFFF33] w-[153px] -rotate-45`}/>
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
                            <div className={`w-full flex self-end  my-12`} dir={'rtl'}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#FFFFFFCC] to-[#FFFFFF00] backdrop-blur-[1px] flex items-center justify-center`}>
                                    <ClockIcon className={`text-yellow-500 w-10 h-10`}/>
                                </div>
                                <div className={`ps-12`}>
                                    <div className={`w-full flex items-center gap-6`}>
                                    <span
                                        className={`font-poppins font-thin text-[30px] text-[#FFFFFF33]`}>06</span>
                                        <h1 dir={'ltr'}
                                            className={`text-[28px] text-yellow-100 font-[400] font-taviraj`}>
                                            Dont be Left behind!
                                        </h1>
                                    </div>
                                    <p
                                        className={`text-[#FFFFFFCC] text-[20px] leading-8 max-w-[436px] drop-shadow-[0_4px_4px_#00000040] font-poppins font-light`}
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <Separator className={`bg-[#FFFFFF33] w-[183px] rotate-45`}/>
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
                            <div className={`w-full flex`}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#FFFFFFCC] to-[#FFFFFF00] backdrop-blur-[1px] flex items-center justify-center`}>
                                    <SwatchIcon className={`text-yellow-500 w-10 h-10`}/>
                                </div>
                                <div className={`ps-12`}>
                                    <div className={`w-full flex items-center gap-6`}>
                                    <span
                                        className={`font-poppins font-thin text-[30px] text-[#FFFFFF33]`}>07</span>
                                        <h1 className={`text-[28px] text-yellow-100 font-[400] font-taviraj`}>
                                            Creative Room
                                        </h1>
                                    </div>
                                    <p
                                        className={`text-[#FFFFFFCC] text-[20px] leading-8 max-w-[436px] drop-shadow-[0_4px_4px_#00000040] font-poppins font-light`}
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <Separator className={`bg-[#FFFFFF33] w-[153px] -rotate-45`}/>
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