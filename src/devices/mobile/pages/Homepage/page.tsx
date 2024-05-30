'use client';

import {Fragment, useRef, useState} from "react";
import FirstSection from "@/devices/mobile/features/HomePage/FirstSection";
import SecondSection from "@/devices/mobile/features/HomePage/SecondSection";
import ThirdSection from "@/devices/mobile/features/HomePage/ThirdSection";
import ForthSection from "@/devices/mobile/features/HomePage/ForthSection";
import FifthSection from "@/devices/mobile/features/HomePage/FifthSection";
import SixthSection from "@/devices/mobile/features/HomePage/SixthSection";
import SeventhSection from "@/devices/mobile/features/HomePage/SeventhSection";
import ProgressBar from "@/devices/mobile/components/HomePage/ProgressBar";
import BottomBar from "@/devices/mobile/components/HomePage/BottomBar";


export default function HomePage(): React.ReactNode {

    const [step, setStep] = useState<number>(1);

    const container = useRef<HTMLElement | null>(null);

    // @ts-ignore
    // @ts-ignore
    return (

        <Fragment>
            <section className="block lg:hidden w-screen h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] ">
                {/* progreass bar */}
                <ProgressBar step={step}/>
                {/* progress bar */}

                {/* Bottom menu */}
                <BottomBar container={container!} setStep={setStep} step={step}/>
                {/* bottom menu */}

                <section
                    ref={container}
                    onScroll={(event: React.UIEvent<HTMLElement>) => {

                        const element = event.currentTarget as HTMLElement;
                        const x = Math.round(element.scrollHeight / window.innerHeight);
                        const y = Math.floor((element.scrollTop + window.innerHeight) / window.innerHeight);

                        setStep(y)

                    }}
                    className={`introduction-scroller no-scrollbar relative`}
                >

                    {/* Start First Step */}
                    <FirstSection step={step}/>
                    {/* End First Step */}

                    {/* Start Second Step */}
                    <SecondSection step={step}/>
                    {/* End Second Step */}

                    {/* start Third Step */}
                    <ThirdSection step={step}/>
                    {/* End Third Step */}

                    {/* start forth step */}
                    <ForthSection step={step}/>
                    {/* end forth step */}

                    {/* start section five */}
                    <FifthSection step={step}/>
                    {/* end section five */}

                    {/* start section six */}
                    <SixthSection step={step}/>
                    {/* end section six */}

                    {/* start section seven */}
                    <SeventhSection step={step}/>
                    {/* end section seven */}

                </section>
            </section>
        </Fragment>

    );
}
