import Image from "next/image";
import ImageOne from "@/assets/images/introduction/first_step_image.png";
import dynamic from "next/dynamic";
import "./firstSection.css";
import { buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils/cn";
const ClientMotionComponent  = dynamic( ()=>import("@/devices/mobile/components/HomePage/ClientMotionComponent"),{ssr:false});

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
                className={`w-full isolate overflow-hidden bg-transparent relative flex items-center !h-[calc(100vh-92px)]`}>

                <div className={``}>
                     <span
                         className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] pt-4`}>01</span>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white max-w-[267px] leading-[3.5rem] drop-shadow-[0_4px_4px_#00000040]`}>
                        Advertise
                        <p className={`font-taviraj font-medium italic text-[#ffe9a6]`}>Creatively</p>
                        & beyond
                    </h1>
                    <p className={`text-[#ffe9a6] text-[16px] leading-6 max-w-[316px] mt-6 drop-shadow-[0_4px_4px_#00000040] font-poppins font-light `}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Link
                        href={'/advertise'}
                        className={cn(buttonVariants({variant: "outline"}), 'w-[126px] h-10 mt-4 text-white rounded-[8px] font-poppins')}
                    >
                        More...
                    </Link>
                </div>
                <div className={`relative isolate flex justify-between`}>

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

            </ClientMotionComponent>
        </>
    )
}

export default FirstSection