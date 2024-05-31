'use client';

import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import FirstSection from "@/devices/desktop/features/HomePage/FirstSection";
import SecondSection from "@/devices/desktop/features/HomePage/SecondSection";
import ThirdSection from "@/devices/desktop/features/HomePage/ThirdSection";
import ForthSection from "@/devices/desktop/features/HomePage/ForthSection";
import FifthSection from "@/devices/desktop/features/HomePage/FifthSection";
import SixthSection from "@/devices/desktop/features/HomePage/SixthSection";
import SeventhSection from "@/devices/desktop/features/HomePage/SeventhSection";
// import ProgressBar from "@/devices/mobile/components/HomePage/ProgressBar";
// import BottomBar from "@/devices/mobile/components/HomePage/BottomBar";

import Logo from "@/assets/images/logo-lg.png"
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function HomePage(): React.ReactNode {

    const [step, setStep] = useState<number>(1);

    const container = useRef<HTMLElement | null>(null);

    // @ts-ignore
    // @ts-ignore
    return (

        <Fragment>
            <section
                className="hidden lg:block px-8 2xl:px-0 w-screen max-w-[1490px] mx-auto h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] relative isolate">

                <nav
                    className={` w-full h-[60px] bg-transparent flex mt-8 items-center gap-[294px] justify-between relative z-[-10] isolate`}>
                    <div className={`flex items-center gap-[94px]`}>
                        <Image src={Logo} alt={''} className={`h-[60px] w-[40px] drop-shadow-sm object-cover`} />
                        <menu className={`flex w-[424px] justify-around items-center`}>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({ variant: "outline" }), 'border-none text-white font-[300] text-[16px] font-poppins')}
                            >
                                Home
                            </Link>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({ variant: "outline" }), 'border-none text-white font-[300] text-[16px] font-poppins opacity-50')}
                            >
                                Services
                            </Link>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({ variant: "outline" }), 'border-none text-white font-[300] text-[16px] font-poppins opacity-50')}
                            >
                                About us
                            </Link>
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({ variant: "outline" }), 'border-none text-white font-[300] text-[16px] font-poppins opacity-50')}
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
                            <ArrowDownTrayIcon className={`w-5 h-5`} />
                        </Button>
                    </div>
                </nav>

                <div className={`flex items-center gap-2 absolute z-[20] left-[50%] bottom-8 translate-x-[-50%]`}>
                    <span className={`text-white font-poppins font-light leading-6 text-[16px] cursor-pointer`}>
                        Scroll to discover
                    </span>
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            if (step !== 7) {
                                const next = step + 1;

                                // @ts-ignore
                                container.current.scrollTop = `${step * window.innerHeight}`
                                setStep(next);
                            }
                        }}
                        className={`w-8 h-8 rounded-[8px] flex items-center justify-center button-animation`}>
                        <ArrowDownIcon className="w-5 h-5 text-white" />
                    </Button>
                </div>

                <div
                    className={` w-[2px] h-full max-h-[326px] flex items-center justify-between absolute z-[20] isolate right-8 gap-3 top-[50%] translate-y-[-50%]`}>
                    <span
                        className={`w-full h-full overflow-hidden bg-white bg-opacity-20 `}>
                        <span
                            style={{
                                boxShadow: `0px 0px 8px 0px #F5C61AB2`,
                                height: `${step === 1 ? Math.floor(100 / 7) : (Math.floor(100 / 7) * step) + 2}%`
                            }}
                            className={`block h-full bg-gradient-to-r from-[#F5C61A] to-[#F47C20] transition-all`}></span>
                    </span>
                </div>

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
                    <FirstSection step={step} />
                    {/* End First Step */}

                    {/* Start Second Step */}
                    <SecondSection step={step} />
                    {/* End Second Step */}

                    {/* start Third Step */}
                    <ThirdSection step={step} />
                    {/* End Third Step */}

                    {/* start forth step */}
                    <ForthSection step={step} />
                    {/* end forth step */}

                    {/* start section five */}
                    <FifthSection step={step} />
                    {/* end section five */}

                    {/* start section six */}
                    <SixthSection step={step} />
                    {/* end section six */}

                    {/* start section seven */}
                    <SeventhSection step={step} />
                    {/* end section seven */}

                </section>
            </section>
        </Fragment>

    );
}
