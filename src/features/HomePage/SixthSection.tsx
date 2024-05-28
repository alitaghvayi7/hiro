import ClientMotionComponent from "@/components/HomePage/ClientMotionComponent";
import Image from "next/image";
import ImageSix from "@/assets/images/introduction/step_six_image.png";
import TriangleLeft from "@/assets/images/introduction/trinagle-left.png";
import TriangleRight from "@/assets/images/introduction/triangle-right.png";
import './sixthSection.css';
import {Button} from "@/components/ui/button";

interface Props{
    step:number
}

const SixthSection = (props:Props) => {

    const {step} = props;

    return(
        <>
            <ClientMotionComponent
                step={step}
                value={6}
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
                            <Image src={TriangleLeft} className="w-full h-full object-cover" alt=""/>
                        </div>
                        <div
                            className={`w-[70px] h-[65px] absolute bottom-[75px] right-[15px] rotate-[-10deg] z-[1] backdrop-blur-[1px] translate-animation-two`}>
                            <Image src={TriangleRight} className="w-full h-full object-cover" alt=""/>
                        </div>
                    </div>
                    <span className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] relative`}>06</span>
                </div>
                <div className={`relative top-[-8%] flex flex-col`}>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white leading-[3rem]`}>
                        Don't be
                        <span className={`font-taviraj italic text-[#ffe9a6]`}>Left behind </span>
                        in the Startup field of your industry!
                    </h1>
                    <p className={`font-poppins text-[#ffe9a6] text-[16px] leading-6 max-w-[290px] mt-4`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button
                        variant={'outline'}
                        className={`w-[126px] h-10 mt-4 rounded-[8px] font-poppins`}>
                        More...
                    </Button>
                </div>
            </ClientMotionComponent>
        </>
    )
}

export default SixthSection