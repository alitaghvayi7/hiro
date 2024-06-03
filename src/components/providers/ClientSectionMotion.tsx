'use client';

import {motion,MotionProps} from "framer-motion"
import {cn} from "@/lib/utils/cn";

interface Props extends MotionProps {
    children?: React.ReactNode,
    className?: string,
}

const ClientSectionMotion = (props: Props) => {

    const {
        children,
        className,
        ...others
    } = props;

    return (
        <motion.section
            className={cn('', className)}
            {...others}
        >
            {children}
        </motion.section>
    )
}

export default ClientSectionMotion