'use client';

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {Link} from "@/navigation"
import { usePathname } from '@/navigation';
import {useTranslate} from "@/lib/hooks/useTranslate";

const Menu = () => {
    const pathname = usePathname();
    const translate = useTranslate('menu')
    return (
        <menu className={`flex w-[424px] justify-around items-center`}>
            <Link
                href={'/'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/' ? 'opacity-100' : 'opacity-50'}`)}
            >
                {translate('home')}
            </Link>
            <Link
                href={'/services'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/as' ? 'opacity-100' : 'opacity-50'}`)}
            >
                {translate('services')}
            </Link>
            <Link
                href={'/aboutus'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/contactus' ? 'opacity-100' : 'opacity-50'}`)}
            >
                {translate('about')}
            </Link>
            <Link
                href={'/contactus'}
                className={cn(buttonVariants({ variant: "outline" }), `border-none text-white font-[300] text-[16px] font-poppins ${pathname === '/contactus' ? 'opacity-100' : 'opacity-50'}`)}
            >
                {translate('contact')}
            </Link>
        </menu>
    )
}

export default Menu