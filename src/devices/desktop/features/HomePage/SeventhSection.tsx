import Image from "next/image";
import ImageSeven from "@/assets/images/introduction/image7-lg.png";
import {Link} from "@/navigation";
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";

interface Props {
    step: number
}

const SeventhSection = (props: Props) => {
    const { step } = props;

    return (
        <>
            <ClientMotionComponent
                step={step}
                value={7}
                className={`w-full !h-[calc(100vh-92px)] relative isolate overflow-hidden bg-transparent flex items-center`}>
                <div className="h-full flex flex-col justify-center gap-8">
                    <h1 className={`font-taviraj font-[500] italic text-[38px] text-[#ffe9a6] leading-[120%]`}>
                        Congratulation!
                    </h1>

                    <p className={`font-taviraj font-[400] leading-[30px] text-[28px] text-white max-w-[326px]`}>
                        From now on, you will have a dynamic and creative thinking room...
                    </p>
                    <Link
                        href='/aboutus'
                        className={`w-[192px] h-10 mt-4 text-white font-poppins rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                        More...
                    </Link>
                </div>
                <div className="h-full flex items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

                    <div
                        className="absolute z-[-1] rounded-full border border-[#FFFFFF33] w-[505px] h-[505px] top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    <Image
                        src={ImageSeven}
                        alt=""
                        className="object-conatin w-[359px] h-full max-h-[507px]"
                    />
                </div>




            </ClientMotionComponent>
        </>
    )
}

export default SeventhSection