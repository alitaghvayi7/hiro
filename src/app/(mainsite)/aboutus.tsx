import { HomeIcon } from "@heroicons/react/24/solid"


function aboutus() {
    return (
        <section className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212]">
            <div
                className={` w-[calc(100%-3rem)] fixed bottom-6 left-6 right-6 flex items-center justify-between z-[10]`}>
                <span className="text-white poppins-medium text-[16px] cursor-pointer">
                    EN  /  FA
                </span>
                <div className={`flex items-center gap-2`}>
                    <button
                        className={`w-8 h-8 rounded-[4px] border border-white flex items-center justify-center button-animation`}>
                        <HomeIcon className="w-4 h-4 text-white" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default aboutus