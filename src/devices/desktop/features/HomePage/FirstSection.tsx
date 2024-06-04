import Image from "next/image";
import ImageOne from "@/assets/images/introduction/image1-lg.png";
import dynamic from "next/dynamic";
import "./firstSection.css";
import {buttonVariants} from "@/components/ui/button";
import {Link} from "@/navigation";
import {cn} from "@/lib/utils/cn";
import {useTranslate} from "@/lib/hooks/useTranslate";

const ClientMotionComponent = dynamic(() => import("@/devices/mobile/components/HomePage/ClientMotionComponent"), {ssr: false});

interface Props {
    step: number,
}

const FirstSection = (props: Props) => {

    const {step} = props;
    const translate = useTranslate('home.first');

    return (
        <>
            <ClientMotionComponent
                step={step}
                value={1}
                className={`w-full isolate overflow-hidden bg-transparent relative flex items-center !h-[calc(100vh-92px)]`}>

                <div className={``}>
                     <span
                         className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] pt-4`}>01</span>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white max-w-[267px] leading-[3.5rem] drop-shadow-[0_4px_4px_#00000040]`}>
                        {/*Advertise*/}
                        {/*<p className={`font-taviraj font-medium italic text-[#ffe9a6]`}>Creatively</p>*/}
                        {/*& beyond*/}
                        {translate('title-p-1')}
                        <p className={`font-taviraj font-medium italic text-[#ffe9a6]`}>{translate('subtitle-1')}</p>
                        {translate('title-p-2')}
                    </h1>
                    <p className={`text-[#ffe9a6] text-[16px] leading-6 max-w-[316px] mt-6 drop-shadow-[0_4px_4px_#00000040] font-poppins font-light `}>
                        {translate('description')}
                    </p>
                    <Link
                        href={'/advertise'}
                        className={cn(buttonVariants({variant: "outline"}), 'w-[126px] h-10 mt-4 text-white rounded-[8px] font-poppins')}
                    >
                        {translate('linkcontent')}
                    </Link>
                </div>

                <div
                    className={`relative isolate w-full h-[80%] max-w-[836px] max-h-[804px] rotate-animation flex items-center justify-center`}>
                    <div
                        className={`max-w-[662px] max-h-[650px] w-full h-full z-[-1] isolate flex items-center justify-center rotate-animation`}>
                        <Image
                            src={ImageOne}
                            alt=""
                            className="object-contain w-full h-full absolute inset-0 z-[-1]"
                        />

                    </div>
                    {/*<div*/}
                    {/*    className={`w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute top-0 right-[20%] top-[50%] z-[1] backdrop-blur-[1px] rotate-animation-two`}></div>*/}
                    <div
                        className={`w-[158px] h-[158px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute left-[12%] bottom-0 z-[1] backdrop-blur-[1px] rotate-animation-one`}></div>
                    <div
                        className={`w-[87px] h-[87px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[60px] right-0 z-[1] backdrop-blur-[1px] rotate-animation-two`}></div>
                </div>


            </ClientMotionComponent>
        </>
    )
}

export default FirstSection