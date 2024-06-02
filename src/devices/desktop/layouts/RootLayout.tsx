import { Fragment } from "react"
import Navbar from "../components/common/Navbar"

interface IProps {
    children: React.ReactNode
}

const RootLayout = (props: IProps) => {
    const { children } = props;
    return (
        <>
            <Fragment>
                <section
                    className="hidden lg:block px-8 2xl:px-0 w-screen max-w-[1490px] mx-auto overflow-hidden bg-gradient-to-b from-[#024343] to-[#001212] relative isolate">
                    <Navbar />
                    {children}
                </section>
            </Fragment>
        </>
    )
}

export default RootLayout