'use client';

import {Fragment, useRef, useState} from "react";
import FirstSection from "@/features/HomePage/FirstSection";
import SecondSection from "@/features/HomePage/SecondSection";
import ThirdSection from "@/features/HomePage/ThirdSection";
import ForthSection from "@/features/HomePage/ForthSection";
import FifthSection from "@/features/HomePage/FifthSection";
import SixthSection from "@/features/HomePage/SixthSection";
import SeventhSection from "@/features/HomePage/SeventhSection";
import ProgressBar from "@/components/HomePage/ProgressBar";
import BottomBar from "@/components/HomePage/BottomBar";


export default function Home(): React.ReactNode {

    const [step, setStep] = useState<number>(1);

    const container = useRef<HTMLElement | null>(null);

    // @ts-ignore
    // @ts-ignore
    return (

        <Fragment>
            <section className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] ">
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
