'use client';

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from 'next/navigation';

const Menu = () => {
    const pathname = usePathname();
    return (
        <menu className={`flex w-[424px] justify-around items-center`}>
            <Link
                href={'/'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/' ? 'opacity-100' : 'opacity-50'}`)}
            >
                Home
            </Link>
            <Link
                href={'/'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/as' ? 'opacity-100' : 'opacity-50'}`)}
            >
                Services
            </Link>
            <Link
                href={'/aboutus'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/aboutus' ? 'opacity-100' : 'opacity-50'}`)}
            >
                About us
            </Link>
            <Link
                href={'/'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/contactus' ? 'opacity-100' : 'opacity-50'}`)}
            >
                Contact us
            </Link>
        </menu>
    )
}

export default Menu