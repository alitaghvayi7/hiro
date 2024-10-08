import Image from "next/image";
import ImageSeven from "@/assets/images/introduction/final_step.png";
import {Link} from "@/navigation";
import ClientMotionComponent from "@/devices/mobile/components/HomePage/ClientMotionComponent";
import {useTranslate} from "@/lib/hooks/useTranslate";

interface Props {
    step: number
}

const SeventhSection = (props: Props) => {
    const {step} = props;
    const translate = useTranslate('home.final');

    return (
        <>
            <ClientMotionComponent
                step={step}
                value={7}
                className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col justify-center items-center gap-4`}>
                <div
                    className="absolute z-[-1] rounded-full border border-[#FFFFFF33] w-[413px] h-[413px] top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                <Image
                    src={ImageSeven}
                    alt=""
                    className="object-cover w-[192px] h-[282px]"
                />

                <h1 className={`font-taviraj font-[500] italic text-[38px] text-[#ffe9a6] leading-[120%] text-center`}>
                    {translate('title')}
                </h1>

                <p className={`font-taviraj font-[400] leading-[30px] text-[28px] text-white max-w-[326px] text-center`}>
                    {translate('description')}
                </p>
                <Link
                    href='/aboutus'
                    className={`w-[192px] h-10 mt-4 text-white font-poppins rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                    {translate('linkcontent')}
                </Link>
            </ClientMotionComponent>
        </>
    )
}

export default SeventhSection