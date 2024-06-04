
import Image from "next/image";
import ImageFive from "@/assets/images/introduction/step_five_image.png"
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";
import "./fifthSection.css"
import {Button} from "@/components/ui/button";
import {useTranslate} from "@/lib/hooks/useTranslate";

interface Props {
    step : number,
}

const FifthSection = (props:Props) =>{
    const {step} = props;
    const translate = useTranslate('home.fifth')

    return (
        <ClientMotionComponent
            step={step}
            value={5}
            className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center`}>
            <div className={`w-full relative isolate flex justify-between pt-4`}>
                <span className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] relative`}>05</span>
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
                <h1 className={`font-taviraj font-normal text-[50px] text-white leading-[3rem] max-w-[330px] text-end`}>
                    {translate('title-p-1')}
                    <br/>
                    <span className={`font-taviraj-italic text-[#ffe9a6]`}>{translate('subtitle-1')}</span>
                    {translate('title-p-2')}
                    <span className={`font-taviraj italic text-[#ffe9a6]`}>{translate('subtitle-2')}</span>
                </h1>
                <p className={`font-poppins text-[#ffe9a6] text-[16px] leading-6 text-end max-w-[290px] mt-4`}>
                    {translate('description')}
                </p>
                <Button
                    variant={'outline'}
                    className={`w-[126px] h-10 mt-4 text-white rounded-[8px] font-poppins`}>
                    {translate('linkcontent')}
                </Button>
            </div>
        </ClientMotionComponent>
    )
}

export default FifthSection