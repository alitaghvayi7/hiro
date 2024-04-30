"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const TransitionProvider = ({ children }: { children?: React.ReactNode }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Fragment
                key={pathName}
            >
                {children}
            </Fragment>
        </AnimatePresence>
    );
};

export default TransitionProvider;
