import Image from "next/image";
import ImageTwo from "@/assets/images/introduction/image2-lg.png"
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";
import "./secondSection.css"
import {Button} from "@/components/ui/button";

interface Props {
    step: number,
}

const SecondSection = (props: Props) => {

    const {step} = props;

    return (
        <>
            <ClientMotionComponent
                step={step}
                value={2}
                className={`w-full !h-[calc(100vh-92px)] isolate overflow-hidden bg-transparent flex items-center gap-[169px] relative`}>
                <div className={``}>
                                    <span
                                        className={`font-poppins font-thin text-[90px] text-[#FFFFFF33]`}>02</span>
                    <h1 className={`font-taviraj font-normal text-[50px] text-white max-w-[267px] leading-[3rem]`}>
                        What do
                        <br/>
                        <span className={`font-taviraj font-medium italic text-[#ffe9a6]`}>People </span>
                        say about you?
                    </h1>
                    <p className={`font-poppins text-[#ffe9a6] text-[16px] leading-6 w-full mt-4 max-w-[316px]`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button
                        variant={'outline'}
                        className={`w-[126px] h-10 mt-4 font-poppins font-light rounded-[8px]`}>
                        More...
                    </Button>
                </div>
                <div className={`relative isolate w-full h-[80%] ms-[10rem] max-w-[711px] max-h-[502px] translate-animation flex items-center justify-center`}>
                    <Image
                        src={ImageTwo}
                        alt=""
                        className="max-w-[692px] max-h-[410px] w-full h-full object-contain relative z-[-1]"
                    />

                    <div
                        className={`w-[287px] h-[50px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute top-4 right-[70px] z-[1] backdrop-blur-[1px] translate-animation`}></div>
                    <div
                        className={`w-[197px] h-[50px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[125px] left-[12%] z-[1] backdrop-blur-[1px] translate-animation`}></div>
                    <div
                        className={`w-[247px] h-[50px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[35px] right-[-15px] z-[1] backdrop-blur-[1px] translate-animation`}></div>

                </div>

            </ClientMotionComponent>
        </>
    )
}

export default SecondSection