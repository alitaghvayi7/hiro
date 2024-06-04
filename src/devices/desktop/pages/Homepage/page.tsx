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
import {Link} from "@/navigation";
import { cn } from "@/lib/utils/cn";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import RootLayout from "../../layouts/RootLayout";

export default function HomePage(): React.ReactNode {

    const [step, setStep] = useState<number>(1);

    const container = useRef<HTMLElement | null>(null);

    // @ts-ignore
    return (

        <RootLayout>

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
                className={` w-[2px] h-full max-h-[326px] flex items-center justify-between absolute z-[20] isolate ltr:right-8 rtl:left-8 gap-3 top-[50%] translate-y-[-50%]`}>
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
        </RootLayout>

    );
}
