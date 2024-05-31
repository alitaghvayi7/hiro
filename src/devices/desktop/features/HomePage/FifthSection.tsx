
import Image from "next/image";
import ImageFive from "@/assets/images/introduction/image5-lg.png"
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";
import "./fifthSection.css"
import { Button } from "@/components/ui/button";

interface Props {
    step: number,
}

const FifthSection = (props: Props) => {
    const { step } = props;
    return (
        <ClientMotionComponent
            step={step}
            value={5}
            className={`w-full !h-[calc(100vh-92px)] relative isolate overflow-hidden bg-transparent flex items-center justify-around pe-[72px]`}>
            <div className={`w-full h-[80%] max-w-[711px] max-h-[702px] relative isolate flex justify-between pt-4`}>
                <div className={`relative isolate !max-w-[569px] !max-h-[514px] w-full h-full flex items-center justify-center translate-animation-chain`}>

                    <Image
                        src={ImageFive}
                        alt=""
                        className="object-contain w-full h-full rotate-animation"
                    />

                    <div
                        className={`w-[53px] h-[53px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute top-[20px] right-[10px] z-[-2] rotate-[35deg] backdrop-blur-[1px]  rotate-animation-one`}></div>
                    <div
                        className={`w-[56px] h-[56px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[5px] left-[60px] z-[-2] backdrop-blur-[1px] rotate-animation-two`}></div>
                    <div
                        className={`w-[60px] h-[60px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[20px] right-[35px] rotate-[-40deg] z-[1] backdrop-blur-[1px] rotate-animation-three`}></div>
                </div>
            </div>
            <div className={`relative self-end flex flex-col h-full`}>
                <span className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] relative my-4 text-end`}>05</span>
                <h1 className={`font-taviraj font-normal text-[50px] text-white leading-[3rem] max-w-[407px] text-end`}>
                    Become more
                    <br />
                    <span className={`font-taviraj-italic text-[#ffe9a6]`}>Coherent </span>
                    and
                    <span className={`font-taviraj italic text-[#ffe9a6]`}> Structured</span>
                </h1>
                <p className={`font-poppins text-[#ffe9a6] text-[16px] leading-6 text-end max-w-[412px] mt-4`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Button
                    variant={'outline'}
                    className={`w-[126px] h-10 mt-4 text-white rounded-[8px] font-poppins self-end`}>
                    More...
                </Button>
            </div>
        </ClientMotionComponent>
    )
}

export default FifthSection