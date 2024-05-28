
interface Props {
    step : number,
}


const ProgressBar = (props:Props) =>{

    const {step} = props

    return(
        <>
            <div
                className={` w-[calc(100%-3rem)] flex items-center justify-between fixed isolate top-6 left-6 right-6 gap-3`}>
                    <span
                        className={`w-full h-[3px] overflow-hidden bg-white bg-opacity-20 `}>
                        <span
                            style={{
                                boxShadow: `0px 0px 8px 0px #F5C61AB2`,
                                width: `${step === 1 ? Math.floor(100 / 7) : (Math.floor(100 / 7) * step) + 2}%`
                            }}
                            className={`block h-full bg-gradient-to-r from-[#F5C61A] to-[#F47C20] transition-all`}></span>
                    </span>
            </div>
        </>
    )
}

export default ProgressBar