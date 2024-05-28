
import Image from "next/image";
import ImageFour from "@/assets/images/introduction/forth_step_image.png";
import ClientMotionComponent from "@/components/HomePage/ClientMotionComponent";
import "./forthSection.css";
import {Button} from "@/components/ui/button";

interface Props {
    step : number,
}

const ForthSection = (props:Props) =>{
    const {step} = props;

    return(
        <>
            <ClientMotionComponent
                step={step}
                value={4}
                className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center`}>

                <span className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] relative pt-4`}>04</span>

                <div className={`w-full relative top-0`}>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white leading-[3rem]`}>
                        Evolve
                        <br/>
                        your
                        <span className={`font-taviraj italic text-[#ffe9a6]`}> Sales</span>
                    </h1>
                    <p className={`font-poppins text-[#ffe9a6] text-[16px] leading-6 w-full max-w-[302px] mt-4`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button
                        variant={'outline'}
                        className={`w-[126px] h-10 mt-4 rounded-[8px] font-poppins`}>
                        More...
                    </Button>
                </div>

                <div
                    style={{transformStyle: 'preserve-3d', perspective: '400px'}}
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

            </ClientMotionComponent>
        </>
    )
}

export default ForthSection