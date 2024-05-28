import {ArrowDownIcon} from "@heroicons/react/24/outline";
import {Dispatch, SetStateAction} from "react";
import {Button, buttonVariants} from "@/components/ui/button";

interface Props {
    step : number,
    setStep : Dispatch<SetStateAction<number>>,
    container: HTMLElement | null
}

const BottomBar = (props:Props) =>{

    const {
        step,
        setStep,
        container
    } = props

    return(
        <>
            <div
                className={` w-[calc(100%-3rem)] fixed bottom-6 left-6 right-6 flex items-center justify-between z-[10]`}>
                    <span className={`text-white font-poppins font-medium leading-6 text-[16px] cursor-pointer`}>
                        EN  /  FA
                    </span>
                <div className={`flex items-center gap-2`}>
                        <span className={`text-white font-poppins font-light leading-6 text-[16px] cursor-pointer`}>
                            {step === 1 ? 'Scroll to discover' : ''}
                        </span>
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            if (step !== 7) {
                                const next = step + 1;

                                // @ts-ignore
                                container.current.scrollTop = `${step * window.innerHeight}`
                                setStep(next);
                            }
                        }}
                        className={`w-8 h-8 rounded-[8px] flex items-center justify-center`}>
                            <ArrowDownIcon className="w-5 h-5 text-white"/>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default BottomBar