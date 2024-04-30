'use client';
import TransitionProvider from "@/components/providers/TransitionProvider";
import ImageOne from "@/assets/images/introduction/first_step_image.png"
import ImageTwo from "@/assets/images/introduction/second-step-image.png"
import ImageThree from "@/assets/images/introduction/third_step_iamge.png"
import ImageFour from "@/assets/images/introduction/forth_step_image.png"
import ImageFive from "@/assets/images/introduction/step_five_image.png"
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home(): React.ReactNode {


  return (
    <TransitionProvider>
      <section className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] ">
        <span className={`block w-[calc(100%-3rem)] h-[3px] bg-white bg-opacity-20 fixed isolate top-6 left-6 right-6`}>
          <span
            style={{ boxShadow: `0px 0px 8px 0px #F5C61AB2` }}
            className={`block w-1/2 h-full bg-gradient-to-r from-[#F5C61A] to-[#F47C20] transition-all`}></span>
        </span>
        <div className={` w-[calc(100%-3rem)] fixed bottom-6 left-6 right-6 flex items-center justify-between`}>
          <span className="text-white poppins-medium text-[16px] cursor-pointer">
            EN  /  FA
          </span>
          <div className={`flex items-center gap-2`}>
            <span className="text-white poppins-light text-[16px] cursor-pointer">
              Scroll to discover
            </span>
            <button className={`w-8 h-8 rounded-[4px] border border-white flex items-center justify-center button-animation`}>
              <ArrowDownIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <section
          // style={{ transform: `translateY(-200vh)` }}
          className={`introduction-scroller`}
        >
          {/* Start First Step */}
          <section className={`w-full relative isolate overflow-hidden p-6 bg-transparent`}>
            <div className={`w-full relative isolate flex justify-between`}>
              <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] relative top-[7%] left-[6%] pt-4`}>01</span>
              <div className={`relative isolate w-[376px] h-[361px] pt-4 rotate-animation`}>
                <div className={` absolute top-0 right-[-88px] w-[298px] h-[292px] z-[-1] isolate flex items-center justify-center rotate-animation`}>
                  <Image
                    src={ImageOne}
                    alt=""
                    className="object-cover w-full h-full absolute inset-0 z-[-1]"
                  />

                  <div className={`w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute top-0 right-[70px] z-[1] backdrop-blur-[1px]`}></div>
                </div>

                <div className={`w-[78px] h-[78px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[125px] left-[12%] z-[1] backdrop-blur-[1px] rotate-animation-one`}></div>
                <div className={`w-[40px] h-[40px] rounded-full bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[75px] right-[-15px] z-[1] backdrop-blur-[1px] rotate-animation-two`}></div>
              </div>
            </div>
            <div className={`relative top-[-15%]`}>
              <h1 className={`taviraj-medium text-[50px] text-white max-w-[267px] leading-[3rem]`}>
                Advertise
                <p className={`taviraj-medium-italic text-[#ffe9a6]`}>Creatively</p>
                & beyond
              </h1>
              <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 max-w-[220px] mt-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                More...
              </button>
            </div>
          </section>
          {/* End First Step */}

          {/* Start Second Step */}
          <section className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col`}>
            <div className={`relative isolate w-[368px] h-[210px] top-8 translate-animation mt-4`}>
              <Image
                src={ImageTwo}
                alt=""
                className="object-contain w-full h-full absolute inset-0 z-[-1] top-0 left-[-25%]"
              />

              <div className={`w-[187px] h-[27px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute top-4 right-[70px] z-[1] backdrop-blur-[1px] translate-animation`}></div>
              <div className={`w-[97px] h-[27px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[125px] left-[12%] z-[1] backdrop-blur-[1px] translate-animation`}></div>
              <div className={`w-[147px] h-[27px] rounded-[38px] bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[35px] right-[-15px] z-[1] backdrop-blur-[1px] translate-animation`}></div>

            </div>

            <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] self-end relative top-0`}>02</span>

            <div className={`relative top-[-6%]`}>
              <h1 className={`taviraj-medium text-[50px] text-white max-w-[267px] leading-[3rem]`}>
                What do
                <br />
                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>People </span>
                say about you?
              </h1>
              <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 w-full mt-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                More...
              </button>
            </div>

          </section>
          {/* End Second Step */}

          {/* start Third Step */}
          <section className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col`}>

            <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] self-end relative top-0 pt-4`}>03</span>

            <div dir="rtl" className={`w-full relative top-0 self-end`}>
              <h1 className={`taviraj-medium text-[50px] text-white max-w-[297px] leading-[3rem]`}>
                Become the
                <br />
                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>King </span>
                of your market
              </h1>
              <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 w-full max-w-[259px] mt-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button dir="ltr" className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                More...
              </button>
            </div>

            <div className={`relative isolate w-[300px] h-[300px] top-[-8%] left-[-22%] rotate-animation-triangles`}>
              <Image
                src={ImageThree}
                alt=""
                className="object-contain w-full h-full absolute inset-0 z-[-1] scale-125 rotate-animation"
              />

              <div className={`w-[63px] h-[63px] triangle bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute top-[35%] right-[20%] rotate-90 z-[1] backdrop-blur-[1px] rotate-animation-one`}></div>
              <div className={`w-[63px] h-[63px] triangle bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute top-[-10%] left-[30%] rotate-[-22deg] z-[1] backdrop-blur-[1px] rotate-animation-two`}></div>
              <div className={`w-[43px] h-[43px] triangle bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D900] absolute bottom-[-10%] left-[32%] rotate-[-155deg] z-[1] backdrop-blur-[1px] rotate-animation-three`}></div>

            </div>

          </section>
          {/* End Third Step */}

          {/* start forth step */}
          <section className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col`}>

            <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] relative pt-4`}>04</span>

            <div className={`w-full relative top-0`}>
              <h1 className={`taviraj-medium text-[50px] text-white leading-[3rem]`}>
                Evolve
                <br />
                your
                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>Sales</span>
              </h1>
              <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 w-full max-w-[302px] mt-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                More...
              </button>
            </div>

            <div className={`relative isolate w-[232px] h-[232px] top-[-4%] right-[-48%] rotate-animation-triangles`}>
              <Image
                src={ImageFour}
                alt=""
                className="object-contain w-full h-full absolute inset-0 z-[-1] "
              />

              <div className={`w-[77px] h-[77px] donate border-[15px] !rounded-full absolute top-[35%] right-[20%] z-[1] backdrop-blur-[1px]`}>

              </div>
              <div className={`w-[77px] h-[77px]  donate border-[15px] !rounded-full absolute top-[-10%] left-[30%] z-[1] backdrop-blur-[1px] `}></div>
              <div className={`w-[77px] h-[77px] donate border-[15px] !rounded-full absolute bottom-[-10%] left-[32%] z-[1] backdrop-blur-[1px] `}></div>

            </div>

          </section>
          {/* end forth step */}

          {/* start section five */}
          <section className={`w-full relative isolate overflow-hidden p-6 bg-transparent flex flex-col`}>
            <div className={`w-full relative isolate flex justify-between pt-4`}>
              <span className={`poppins-extralight text-[90px] text-[#FFFFFF33] relative`}>05</span>
              <div className={`relative isolate w-[315px] h-[290px]`}>
                <div className={` absolute top-[30px] right-[-60px] w-[362px] h-[326px] z-[-1] isolate flex items-center justify-center rotate-animation`}>
                  <Image
                    src={ImageFive}
                    alt=""
                    className="object-cover w-full h-full absolute inset-0 z-[-1]"
                  />


                </div>
                <div className={`w-[53px] h-[53px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute top-0 right-[70px] z-[1] backdrop-blur-[1px]`}></div>
                <div className={`w-[56px] h-[56px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[125px] left-[12%] z-[1] backdrop-blur-[1px] rotate-animation-one`}></div>
                <div className={`w-[60px] h-[60px] rounded-[12px] bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF00] absolute bottom-[75px] right-[-15px] z-[1] backdrop-blur-[1px] rotate-animation-two`}></div>
              </div>
            </div>
            <div className={`relative top-[-15%] self-end flex flex-col items-end`}>
              <h1 className={`taviraj-medium text-[50px] text-white leading-[3rem] max-w-[330px] text-end`}>
                Become more
                <br />
                <span className={`taviraj-medium-italic text-[#ffe9a6]`}>Coherent </span>
                and
                <span className={`taviraj-medium-italic text-[#ffe9a6]`}> Structured</span>
              </h1>
              <p className={`poppins-light text-[#ffe9a6] text-[16px] leading-6 text-end max-w-[290px] mt-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className={`w-[126px] h-10 mt-4 text-white poppins-light rounded-[8px] border border-[#FFFFFF33] flex items-center justify-center`}>
                More...
              </button>
            </div>
          </section>
          {/* end section five */}

        </section>


      </section>


    </TransitionProvider>
  );
}
