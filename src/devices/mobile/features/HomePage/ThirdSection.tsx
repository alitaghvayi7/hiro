
import Image from "next/image";
import ImageThree from "@/assets/images/introduction/third_step_iamge.png";
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";
import './thirdSection.css';
import {Button} from "@/components/ui/button";

interface Props {
    step : number,
}

const ThirdSection = (props:Props) => {
    const {step} = props;

    return(
        <>
            <ClientMotionComponent
                step={step}
                value={3}
                className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center`}>

                        <span
                            className={`font-poppins font-thin text-[90px] text-[#FFFFFF33] self-end relative top-0 pt-4`}>03</span>

                <div dir="rtl" className={`w-full relative top-0 self-end`}>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white max-w-[297px] leading-[3rem]`}>
                        Become the
                        <br />
                        <span className={`font-taviraj text-[#ffe9a6]`}>King </span>
                        of your market
                    </h1>
                    <p className={`font-poppins text-[#ffe9a6] text-[16px] leading-6 w-full max-w-[259px] mt-4`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button
                        dir={'ltr'}
                        variant={'outline'}
                        className={`w-[126px] h-10 mt-4 rounded-[8px] font-poppins`}>
                        More...
                    </Button>
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

            </ClientMotionComponent>
        </>
    )
}

export default ThirdSection