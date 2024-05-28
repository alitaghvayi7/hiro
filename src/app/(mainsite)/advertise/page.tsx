import Image from "next/image";
import ImageOne from "@/assets/images/introduction/first_step_image.png";
import {Separator} from "@/components/ui/seprator";
import ChartComponent from "@/components/AdvertisePage/ChatComponent";

export default function AdvertisePage (){
    return(
        <>
            <section className="w-screen min-h-screen overflow-hidden overflow-y-auto bg-gradient-to-b from-[#024343] to-[#001212] ">
                  <span className={`text-white font-poppins font-medium leading-6 text-[16px] cursor-pointer flex w-full justify-end px-6 pt-4`}>
                        EN  /  FA
                  </span>
                <div className={`w-full h-[315px] flex items-center relative isolate rotate-animation`}>
                    <div
                        className={` absolute top-0 right-[-35%] w-[327px] h-[315px] z-[-1] isolate flex items-center justify-center rotate-animation`}>
                        <Image
                            src={ImageOne}
                            alt=""
                            className="object-cover w-full h-full absolute inset-0 z-[-1]"
                        />

                    </div>

                    <div
                        className={`w-[106px] h-[106px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] opacity-50 absolute top-[-30px] left-[4%] z-[1] backdrop-blur-[1px]`}></div>
                    <div
                        className={`w-[78px] h-[78px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] opacity-50 absolute bottom-[0] left-[-4%] z-[1] backdrop-blur-[1px]`}></div>


                    <h1 className={`font-taviraj font-[200] text-yellow-100 text-[48px] ps-6 italic`}>
                        Advertise
                    </h1>
                </div>

                <div className={`w-[calc(100%-3rem)] mx-auto overflow-x-hidden`}>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px]`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry
                    </p>
                    <Separator orientation="vertical" className={`h-[48px] bg-[#FFFFFF33] my-4`}/>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px]`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                    </p>
                    <h2 className={`font-taviraj font-[300] text-yellow-100 text-[40px] my-4`}>
                        Creatively
                    </h2>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px]`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                    <p className={`w-full text-[#FFFFFFCC] font-poppins font-[300[ leading-6 text-[16px] my-6`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                    <div className={`w-full border border-[#FFFFFF33] rounded-[8px] h-[295px]`}>
                        <div className={`w-full`}></div>
                        <Separator className={`bg-[#FFFFFF33]`}/>
                        <div className={`w-full p-4`}>
                            <ChartComponent/>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}