import RootLayout from "@/devices/desktop/layouts/RootLayout";
import DesktopFooter from "@/devices/desktop/components/common/DesktopFooter";
import Image from "next/image";
import ImageOne from "@/assets/images/advertise/Frame12-lg.png";
import ImageSeven from "@/assets/images/introduction/image7-lg.png";
import {Separator} from "@/components/ui/seprator";
import {useTranslate} from "@/lib/hooks/useTranslate";

export default function AboutusPage () {
    const translate = useTranslate('about');
    return(
        <>
            <RootLayout>
                <div
                    className="w-full bg-transparent relative isolate hidden lg:block">

                    <div className={`flex gap-[80px] justify-between mt-[126px]`}>
                        <div
                            className="flex items-center justify-center relative min-w-[436px] w-[436px] h-[436px]">
                            <div
                                className="absolute z-[-1] rounded-full border border-[#FFFFFF33] w-full h-full top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                            <Image
                                src={ImageSeven}
                                alt=""
                                className="object-conatin w-[80%] h-[110%] max-h-[507px]"
                            />
                        </div>
                        <div className={`flex flex-col gap-4`}>

                            <div>
                                <h1 className={`text-[90px] text-yellow-500 font-[100] ltr:tracking-[.5rem] rtl:tracking-[0] italic font-taviraj`}>
                                    {translate('title')}
                                </h1>
                                <p className={`text-[#FFFFFFCC] text-[20px] font-[300] break-words font-poppins mt-10`}>
                                    {translate('paragraph-1')}
                                    <br/><br/><br/><br/>
                                    {translate('paragraph-2')}
                                </p>
                            </div>

                            <div
                                className={`flex w-full h-[80%] max-h-[499px] rounded-[16px] items-center justify-center overflow-hidden`}>
                                <Image
                                    src={ImageOne}
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <p className={`text-[#FFFFFFCC] text-[20px] font-[300] break-words font-poppins mt-10`}>
                                {translate('paragraph-3')}
                                <br/><br/><br/><br/>
                                {translate('paragraph-4')}
                            </p>
                        </div>
                    </div>
                    <Separator className={`w-full bg-[#FFFFFF33] mt-[64px]`}/>
                    <DesktopFooter/>
                </div>
            </RootLayout>
        </>
    )
}