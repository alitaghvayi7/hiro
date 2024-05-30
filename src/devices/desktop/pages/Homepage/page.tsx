'use client';

import {Fragment, useRef, useState} from "react";
import Image from "next/image";
import FirstSection from "@/devices/desktop/features/HomePage/FirstSection";
import SecondSection from "@/devices/desktop/features/HomePage/SecondSection";
import ThirdSection from "@/devices/mobile/features/HomePage/ThirdSection";
import ForthSection from "@/devices/mobile/features/HomePage/ForthSection";
import FifthSection from "@/devices/mobile/features/HomePage/FifthSection";
import SixthSection from "@/devices/mobile/features/HomePage/SixthSection";
import SeventhSection from "@/devices/mobile/features/HomePage/SeventhSection";
import ProgressBar from "@/devices/mobile/components/HomePage/ProgressBar";
import BottomBar from "@/devices/mobile/components/HomePage/BottomBar";

import Logo from "@/assets/images/logo-lg.png"
import Link from "next/link";
import {cn} from "@/lib/utils/cn";
import {Button, buttonVariants} from "@/components/ui/button";
import {ArrowDownTrayIcon} from "@heroicons/react/24/outline";

export default function HomePage(): React.ReactNode {

    const [step, setStep] = useState<number>(1);

    const container = useRef<HTMLElement | null>(null);

    // @ts-ignore
    // @ts-ignore
    return (

        <Fragment>
            <section
                className="hidden lg:block px-8 2xl:px-0 w-screen max-w-[1490px] mx-auto h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] ">
                {/* progreass bar */}
                {/*<ProgressBar step={step}/>*/}
                {/* progress bar */}
                <nav className={` w-full h-[60px] top-8 bg-transparent flex mt-8 items-center gap-[294px] justify-between`}>
                    <div className={`flex items-center gap-[94px]`}>
                        <Image src={Logo} alt={''} className={`h-[60px] w-[40px] drop-shadow-sm object-cover`}/>
                        <menu className={`flex w-[424px] justify-around items-center`}>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({variant: "outline"}), 'border-none text-white font-[300] text-[16px] font-poppins')}
                            >
                                Home
                            </Link>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({variant: "outline"}), 'border-none text-white font-[300] text-[16px] font-poppins opacity-50')}
                            >
                                Services
                            </Link>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({variant: "outline"}), 'border-none text-white font-[300] text-[16px] font-poppins opacity-50')}
                            >
                                About us
                            </Link>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({variant: "outline"}), 'border-none text-white font-[300] text-[16px] font-poppins opacity-50')}
                            >
                                Contact us
                            </Link>
                        </menu>
                    </div>
                    <div className={`flex items-center gap-10`}>
                        <span
                            className={`text-white font-poppins font-[300] text-[16px] cursor-pointer`}>
                                EN  /  FA
                        </span>
                        <Button
                            variant={'outline'}
                            className={`border-yellow-100 text-yellow-100 w-[154px] rounded-[8px] h-[40px]`}
                        >
                            <span className={`text-[16px]`}>
                                Catalog
                            </span>
                            <ArrowDownTrayIcon className={`w-5 h-5`}/>
                        </Button>
                    </div>
                </nav>

                {/* Bottom menu */}
                {/*<BottomBar container={container!} setStep={setStep} step={step}/>*/}
                {/* bottom menu */}


                <section
                    ref={container}
                    onScroll={(event: React.UIEvent<HTMLElement>) => {

                        const element = event.currentTarget as HTMLElement;
                        const x = Math.round(element.scrollHeight / element.clientHeight);
                        const y = Math.floor((element.scrollTop + element.clientHeight) / element.clientHeight);

                        setStep(y)

                    }}
                    className={`introduction-scroller no-scrollbar relative !h-[calc(100vh-92px)]`}
                >

                    {/* Start First Step */}
                    <FirstSection step={step}/>
                    {/* End First Step */}

                    {/* Start Second Step */}
                    <SecondSection step={step}/>
                    {/* End Second Step */}

                    {/* start Third Step */}
                    {/*<ThirdSection step={step}/>*/}
                    {/* End Third Step */}

                    {/* start forth step */}
                    {/*<ForthSection step={step}/>*/}
                    {/* end forth step */}

                    {/* start section five */}
                    {/*<FifthSection step={step}/>*/}
                    {/* end section five */}

                    {/* start section six */}
                    {/*<SixthSection step={step}/>*/}
                    {/* end section six */}

                    {/* start section seven */}
                    {/*<SeventhSection step={step}/>*/}
                    {/* end section seven */}

                </section>
            </section>
        </Fragment>

    );
}
