'use client';

import {motion} from "framer-motion"
import {cn} from "@/lib/utils/cn";

interface Props {
    children: React.ReactNode,
    className: '',
}

const ClientMotionComponent = (props: Props) => {

    const {
        className,
        children,
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