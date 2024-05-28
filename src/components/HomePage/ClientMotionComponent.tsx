'use client';
import {motion} from "framer-motion";
import {cn} from "@/lib/utils/cn";

interface Props{
    step : number,
    children:React.ReactNode,
    className:'',
    value:number,
}

const ClientMotionComponent = (props) =>{
    const {
        step,
        className,
        children,
        value
    } = props;

    return(
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: step === value ? 1 : 0}}
            transition={{duration: 1, ease: "easeInOut"}}
            className={cn('',className)}>
            {children}
        </motion.section>
    )

}

export default ClientMotionComponent;