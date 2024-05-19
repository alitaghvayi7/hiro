'use client';
import TransitionProvider from "@/components/providers/TransitionProvider";
import ImageOne from "@/assets/images/introduction/first_step_image.png"
import ImageTwo from "@/assets/images/introduction/second-step-image.png"
import ImageThree from "@/assets/images/introduction/third_step_iamge.png"
import ImageFour from "@/assets/images/introduction/forth_step_image.png"
import ImageFive from "@/assets/images/introduction/step_five_image.png"
import ImageSix from "@/assets/images/introduction/step_six_image.png"
import ImageSeven from "@/assets/images/introduction/final_step.png"
import TriangleLeft from "@/assets/images/introduction/trinagle-left.png"
import TriangleRight from "@/assets/images/introduction/triangle-right.png"
import Image from "next/image";
import { ArrowDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home(): React.ReactNode {

    const [step, setStep] = useState<number>(1);

    const container = useRef<HTMLElement | null>(null);

    return (

        <Fragment>
            <section className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] ">
                {/* progreass bar */}
                <div className={` w-[calc(100%-3rem)] flex items-center justify-between fixed isolate top-6 left-6 right-6 gap-3`}>
                    <span
                        className={`w-full h-[3px] overflow-hidden bg-white bg-opacity-20 `}>
                        <span
                            style={{
                                boxShadow: `0px 0px 8px 0px #F5C61AB2`,
                                width: `${step === 1 ? Math.floor(100 / 7) : (Math.floor(100 / 7) * step) + 2}%`
                            }}
                            className={`block h-full bg-gradient-to-r from-[#F5C61A] to-[#F47C20] transition-all`}></span>
                    </span>
                </div>
                {/* progress bar */}

                {/* Bottom menu */}
                <div
                    className={` w-[calc(100%-3rem)] fixed bottom-6 left-6 right-6 flex items-center justify-between z-[10]`}>
                    <span className="text-white poppins-medium text-[16px] cursor-pointer">
                        EN  /  FA
                    </span>
                    <div className={`flex items-center gap-2`}>
                        <span className="text-white poppins-light text-[16px] cursor-pointer">
                            {step === 1 ? 'Scroll to discover' : ''}
                        </span>
                        <button
                            onClick={() => {
                                if (step !== 7) {
                                    const next = step + 1;

                                    // @ts-ignore
                                    container.current.scrollTop = `${step * window.innerHeight}`
                                    setStep(next);
                                }
                            }}
                            className={`w-8 h-8 rounded-[8px] border border-white flex items-center justify-center`}>
                            <ArrowDownIcon className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
                {/* bottom menu */}


                <section
                    ref={container}
                    // style={{transform: `translateY(-${(step - 1) * 100}vh)`}}
                    onScroll={(event: React.UIEvent<HTMLElement>) => {

                        const element = event.target;
                        const x = Math.round(element.scrollHeight / window.innerHeight);
                        const y = Math.floor((element.scrollTop + window.innerHeight) / window.innerHeight);

                        // alert(y)
                        console.log(y)
                        setStep(y)

                    }}
                    className={`introduction-scroller no-scrollbar relative`}
                >

                    {/* Start First Step */}
                    <motion.section
                        initial={{ opacity: 1 }}
                        animate={{ opacity: step === 1 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`w-full isolate overflow-hidden p-6 bg-transparent relative flex flex-col justify-center`}>
                        <div className={`w-full relative isolate flex justify-between`}>
                            <span
                                className={`poppins-extralight text-[90px] text-[#FFFFFF33] relative top-[7%] left-[6%] pt-4`}>01</span>
                            <div className={`relative isolate w-[376px] h-[361px] pt-4 rotate-animation`}>
                                <div
                                    className={` absolute top-0 right-[-88px] w-[298px] h-[292px] z-[-1] isolate flex items-center justify-center rotate-animation`}>
                                    <Image
                                        src={ImageOne}
                                        alt=""
                                        className="object-cover w-full h-full absolute inset-0 z-[-1]"
                                    />

                                    <div
                                        className={`w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute top-0 right-[70px] z-[1] backdrop-blur-[1px]`}></div>
                                </div>

                                <div
                                    className={`w-[78px] h-[78px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[125px] left-[12%] z-[1] backdrop-blur-[1px] rotate-animation-one`}></div>
                                <div
                                    className={`w-[40px] h-[40px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[75px] right-[-15px] z-[1] backdrop-blur-[1px] rotate-animation-two`}></div>
                            </div>
                        </div>
                        <div className={`relative top-[-15%]`}>
                            <h1 className={`taviraj-medium text-[50px] text-white max-w-[267px] leading-[3rem] drop-shadow-[0_4px_4px_#00000040]`}>
                                Advertise
                                <p className={`taviraj-medium-italic text-[#ffe9a6]`}>Creatively</p>
                                & beyond
                            </h1>
                            <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 max-w-[220px] mt-4 drop-shadow-[0_4px_4px_#00000040]`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button
                                className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                                More...
                            </button>
                        </div>
                    </motion.section>
                    {/* End First Step */}

                    {/* Start Second Step */}
                    <motion.section
                        initial={{ opacity: 1 }}
                        animate={{ opacity: step === 2 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`w-full isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center relative`}>
                        <div className={`relative isolate w-[368px] h-[210px] top-8 translate-animation mt-4`}>
                            <Image
                                src={ImageTwo}
                                alt=""
                                className="object-contain w-full h-full absolute inset-0 z-[-1] top-0 left-[-25%]"
                            />

                            <div
                                className={`w-[187px] h-[27px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute top-4 right-[70px] z-[1] backdrop-blur-[1px] translate-animation`}></div>
                            <div
                                className={`w-[97px] h-[27px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[125px] left-[12%] z-[1] backdrop-blur-[1px] translate-animation`}></div>
                            <div
                                className={`w-[147px] h-[27px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[35px] right-[-15px] z-[1] backdrop-blur-[1px] translate-animation`}></div>

                        </div>

                        <span
                            className={`poppins-extralight text-[90px] text-[#FFFFFF33] self-end relative top-0`}>02</span>

                        <div className={`relative top-[-6%]`}>
                            <h1 className={`taviraj-medium text-[50px] text-white max-w-[267px] leading-[3rem]`}>
                                What do
                                <br />
                                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>People </span>
                                say about you?
                            </h1>
                            <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 w-full mt-4`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button
                                className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                                More...
                            </button>
                        </div>

                    </motion.section>
                    {/* End Second Step */}

                    {/* start Third Step */}
                    {<motion.section
                        initial={{ opacity: 1 }}
                        animate={{ opacity: step === 3 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center`}>

                        <span
                            className={`poppins-extralight text-[90px] text-[#FFFFFF33] self-end relative top-0 pt-4`}>03</span>

                        <div dir="rtl" className={`w-full relative top-0 self-end`}>
                            <h1 className={`taviraj-medium text-[50px] text-white max-w-[297px] leading-[3rem]`}>
                                Become the
                                <br />
                                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>King </span>
                                of your market
                            </h1>
                            <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 w-full max-w-[259px] mt-4`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button dir="ltr"
                                className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                                More...
                            </button>
                        </div>

                        <div
                            className={`relative isolate w-[300px] h-[300px] top-[-8%] left-[-22%] rotate-animation-triangles`}>
                            <Image
                                src={ImageThree}
                                alt=""
                                className="object-contain w-full h-full absolute inset-0 z-[-1] scale-125 rotate-animation"
                            />

                            <div
                                className={`w-[63px] h-[63px] triangle bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute top-[35%] right-[20%] rotate-90 z-[1] backdrop-blur-[1px] rotate-animation-one`}></div>
                            <div
                                className={`w-[63px] h-[63px] triangle bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute top-[-10%] left-[30%] rotate-[-22deg] z-[1] backdrop-blur-[1px] rotate-animation-two`}></div>
                            <div
                                className={`w-[43px] h-[43px] triangle bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[-10%] left-[32%] rotate-[-155deg] z-[1] backdrop-blur-[1px] rotate-animation-three`}></div>

                        </div>

                    </motion.section>}
                    {/* End Third Step */}

                    {/* start forth step */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: step === 4 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center`}>

                        <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] relative pt-4`}>04</span>

                        <div className={`w-full relative top-0`}>
                            <h1 className={`taviraj-medium text-[50px] text-white leading-[3rem]`}>
                                Evolve
                                <br />
                                your
                                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>Sales</span>
                            </h1>
                            <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 w-full max-w-[302px] mt-4`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button
                                className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                                More...
                            </button>
                        </div>

                        <div
                            style={{ transformStyle: 'preserve-3d', perspective: '400px' }}
                            className={`relative isolate w-[262px] h-[242px] top-[-4%] right-[-40%] rotate-animation-rings`}>
                            <Image
                                src={ImageFour}
                                alt=""
                                className="object-contain w-full h-full absolute inset-0 z-[-1] rotate-animation"
                            />

                            <div
                                className={`w-[77px] h-[77px] donate border-[15px] !rounded-full absolute bottom-0 left-[20%] z-[1] backdrop-blur-[1px] rotate-animation-one`}>

                            </div>
                            <div
                                className={`w-[77px] h-[77px]  donate border-[12px] !rounded-full absolute top-0 left-[5%] z-[-2] backdrop-blur-[1px] rotate-animation-two`}></div>
                            <div
                                className={`w-[77px] h-[77px] donate border-[7px] !rounded-full absolute top-[10%] right-0 z-[1] backdrop-blur-[1px] rotate-animation-three`}></div>

                        </div>

                    </motion.section>
                    {/* end forth step */}

                    {/* start section five */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: step === 5 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center`}>
                        <div className={`w-full relative isolate flex justify-between pt-4`}>
                            <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] relative`}>05</span>
                            <div className={`relative isolate w-[315px] h-[290px] translate-animation-chain`}>
                                <div
                                    className={` absolute top-[30px] right-[-60px] w-[315px] h-[290px] z-[-1] isolate flex items-center justify-center `}>
                                    <Image
                                        src={ImageFive}
                                        alt=""
                                        className="object-cover w-full h-full absolute inset-0 z-[-1] rotate-animation"
                                    />
                                </div>
                                <div
                                    className={`w-[53px] h-[53px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute top-[20px] right-[10px] z-[-2] rotate-[35deg] backdrop-blur-[1px]  rotate-animation-one`}></div>
                                <div
                                    className={`w-[56px] h-[56px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[5px] left-[-40px] z-[-2] backdrop-blur-[1px] rotate-animation-two`}></div>
                                <div
                                    className={`w-[60px] h-[60px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[20px] right-[35px] rotate-[-40deg] z-[1] backdrop-blur-[1px] rotate-animation-three`}></div>
                            </div>
                        </div>
                        <div className={`relative top-0 self-end flex flex-col items-end`}>
                            <h1 className={`taviraj-medium text-[50px] text-white leading-[3rem] max-w-[330px] text-end`}>
                                Become more
                                <br />
                                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>Coherent </span>
                                and
                                <span className={`taviraj-medium-italic text-[#ffe9a6]`}> Structured</span>
                            </h1>
                            <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 text-end max-w-[290px] mt-4`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button
                                className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                                More...
                            </button>
                        </div>
                    </motion.section>
                    {/* end section five */}

                    {/* start section six */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: step === 6 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center`}>
                        <div className={`w-full relative isolate flex justify-between pt-4`}>
                            <div className={`relative isolate w-[315px] h-[290px] translate-animation-pyramid`}>
                                <div
                                    className={` absolute top-[30px] left-[-25px] w-[214px] h-[212px] z-[-1] isolate flex items-center justify-center button-animation`}>
                                    <Image
                                        src={ImageSix}
                                        alt=""
                                        className="object-cover w-full h-full absolute inset-0 z-[-1]"
                                    />

                                </div>
                                <div
                                    className={`w-[53px] h-[53px] pyramid bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[-10%] left-[40%] rotate-[180deg] z-[1] backdrop-blur-[1px] translate-animation-three`}></div>
                                <div
                                    className={`w-[56px] h-[56px] absolute bottom-[125px] left-[5%] rotate-[40deg] z-[-2] backdrop-blur-[1px] translate-animation-one`}>
                                    <Image src={TriangleLeft} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div
                                    className={`w-[70px] h-[65px] absolute bottom-[75px] right-[15px] rotate-[-10deg] z-[1] backdrop-blur-[1px] translate-animation-two`}>
                                    <Image src={TriangleRight} className="w-full h-full object-cover" alt="" />
                                </div>
                            </div>
                            <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] relative`}>06</span>
                        </div>
                        <div className={`relative top-[-8%] flex flex-col`}>
                            <h1 className={`taviraj-medium text-[50px] text-white leading-[3rem]`}>
                                Don't be
                                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>Left behind </span>
                                in the Startup field of your industry!
                            </h1>
                            <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 max-w-[290px] mt-4`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button
                                className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                                More...
                            </button>
                        </div>
                    </motion.section>
                    {/* end section six */}

                    {/* start section seven */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: step === 7 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center items-center gap-4`}>
                        <div className="absolute z-[-1] rounded-full border border-[#FFFFFF33] w-[413px] h-[413px] top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                        <Image
                            src={ImageSeven}
                            alt=""
                            className="object-cover w-[192px] h-[282px]"
                        />
                        <h1 className={`taviraj-medium-italic text-[50px] text-[#ffe9a6] leading-[3rem] text-center`}>
                            Congratulation!
                        </h1>
                        <p className={`taviraj-regular text-[28px] text-white leading-[30px] max-w-[326px] text-center`}>
                            From now on, you will have a dynamic and creative thinking room...
                        </p>
                        <Link
                            href={'/aboutus'}
                            className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                            More...
                        </Link>
                    </motion.section>
                    {/* end section seven */}

                </section>


            </section>
        </Fragment>

    );
}
