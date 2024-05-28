import Image from "next/image";
import ImageOne from "@/assets/images/introduction/first_step_image.png";
import dynamic from "next/dynamic";
import "./firstSection.css";
import {Button} from "@/components/ui/button";
const ClientMotionComponent  = dynamic( ()=>import("@/components/HomePage/ClientMotionComponent"),{ssr:false});

interface Props {
    step : number,
}

const FirstSection = (props:Props) => {

    const {step} = props;

    return(
        <>
            <ClientMotionComponent
                step={step}
                value={1}
                className={`w-full isolate overflow-hidden p-6 bg-transparent relative flex flex-col justify-center`}>
                <div className={`w-full relative isolate flex justify-between`}>
                            <span
                                className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] relative top-[7%] left-[6%] pt-4`}>01</span>
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
                    <h1 className={`font-taviraj font-normal text-[50px] text-white max-w-[267px] leading-[3.5rem] drop-shadow-[0_4px_4px_#00000040]`}>
                        Advertise
                        <p className={`font-taviraj font-medium italic text-[#ffe9a6]`}>Creatively</p>
                        & beyond
                    </h1>
                    <p className={`text-[#ffe9a6] text-[16px] leading-6 max-w-[220px] mt-6 drop-shadow-[0_4px_4px_#00000040] font-poppins font-light `}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button
                        variant={'outline'}
                        className={`w-[126px] h-10 mt-4 text-white rounded-[8px] font-poppins`}>
                        More...
                    </Button>
                </div>
            </ClientMotionComponent>
        </>
    )
}

export default FirstSection