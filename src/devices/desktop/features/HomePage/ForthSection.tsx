
import Image from "next/image";
import ImageFour from "@/assets/images/introduction/image4-lg.png";
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";
import "./forthSection.css";
import {Button} from "@/components/ui/button";
import {useTranslate} from "@/lib/hooks/useTranslate";

interface Props {
    step : number,
}

const ForthSection = (props:Props) =>{

    const {step} = props;
    const translate = useTranslate('home.fourth');

    return(
        <>
            <ClientMotionComponent
                step={step}
                value={4}
                className={`w-full !h-[calc(100vh-92px)] relative isolate overflow-hidden bg-transparent flex items-center gap-[93px] pe-[136px]`}>


                <div className={`w-full relative`}>
                    <span className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] relative py-4`}>04</span>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white leading-[3rem]`}>
                        {translate('title-p-1')}
                        <br/>
                        <span className={`font-taviraj italic text-yellow-100`}>{translate('subtitle-1')}</span>
                    </h1>
                    <p className={`font-poppins text-yellow-100 text-[16px] leading-6 w-full max-w-[455px] mt-4`}>
                        {translate('description')}
                    </p>
                    <Button
                        variant={'outline'}
                        className={`w-[126px] h-10 mt-4 rounded-[8px] font-poppins`}>
                        {translate('linkcontent')}
                    </Button>
                </div>

                <div
                    style={{transformStyle: 'preserve-3d', perspective: '400px'}}
                    className={`relative isolate w-full h-[80%] max-w-[656px] max-h-[646px] rotate-animation-rings`}>
                    <Image
                        src={ImageFour}
                        alt=""
                        className="object-contain !max-w-[656px] !max-h-[625px] w-full h-full absolute inset-0 z-[-1] rotate-animation"
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