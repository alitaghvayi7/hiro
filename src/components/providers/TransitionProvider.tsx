"use client";

import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: { children?: React.ReactNode }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <main
                key={pathName}
            >
                <motion.div
                    className="h-screen w-screen fixed bg-[#024343] to-[#001212] rounded-b-[100px] z-40"
                    animate={{height: "0vh"}}
                    exit={{height: "140vh"}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                />
                <motion.div
                    className="h-screen w-screen fixed from-[#024343] bg-[#001212] rounded-t-[100px] bottom-0 z-30"
                    initial={{height: "140vh"}}
                    animate={{height: "0vh", transition: {delay: 0.5}}}
                />
                {children}
            </main>
        </AnimatePresence>
    );
};

export default TransitionProvider;
