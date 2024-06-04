import Image from "next/image";
import ImageTwo from "@/assets/images/introduction/second-step-image.png"
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";
import "./secondSection.css"
import {Button} from "@/components/ui/button";
import {useTranslate} from "@/lib/hooks/useTranslate";

interface Props {
    step: number,
}

const SecondSection = (props: Props) => {

    const {step} = props;
    const translate = useTranslate('home.second');

    return (
        <>
            <ClientMotionComponent
                step={step}
                value={2}
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
                    className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] self-end relative top-0`}>02</span>

                <div className={`relative top-[-6%]`}>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white max-w-[267px] leading-[3rem]`}>
                        {translate('title-p-1')}
                        <br/>
                        <span
                            className={`font-taviraj font-medium italic text-[#ffe9a6]`}>{translate('subtitle-1')}</span>
                        {translate('title-p-2')}
                    </h1>
                    <p className={`font-poppins text-[#ffe9a6] text-[16px] leading-6 w-full mt-4`}>
                        {translate('description')}
                    </p>
                    <Button
                        variant={'outline'}
                        className={`w-[126px] h-10 mt-4 font-poppins font-light rounded-[8px]`}>
                        {translate('linkcontent')}
                    </Button>
                </div>

            </ClientMotionComponent>
        </>
    )
}

export default SecondSection