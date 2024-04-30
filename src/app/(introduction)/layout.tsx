import TransitionProvider from "@/components/providers/TransitionProvider";

export default function IntroductionLayout({ children }: { children: React.ReactNode }) {
    return (
        <TransitionProvider>
            <section className="w-screen h-screen overflow-hidden">
                <section className={`introduction-scroller`}>
                    <section className={`w-screen h-screen bg-gradient-to-b from-[#024343] to-[#001212] p-6 relative isolate overflow-hidden`}>
                        <span className={`block w-[calc(100%-3rem)] h-[3px] bg-white bg-opacity-20 fixed isolate top-6`}>
                            <span
                                style={{ boxShadow: `0px 0px 8px 0px #F5C61AB2` }}
                                className={`block w-1/2 h-full bg-gradient-to-r from-[#F5C61A] to-[#F47C20] transition-all`}></span>
                        </span>


                        {children}

                        <div className={` w-[calc(100%-3rem)] fixed bottom-6 flex items-center justify-between`}>
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
                    </section>
                </section>
            </section>


        </TransitionProvider>
    )
}