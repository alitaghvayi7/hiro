"use client"

import * as React from "react"
import {DropdownMenuCheckboxItemProps} from "@radix-ui/react-dropdown-menu"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import {useEffect} from "react";
import {getCookie} from "@/lib/utils/cookies";
import Link from "next/link";


type Checked = DropdownMenuCheckboxItemProps["checked"]

const LanguageDropdown = () => {


    const [locale, setLocale] = React.useState<string>(''); // Initialize state for locale


    // Fetch the locale from cookies
    useEffect(() => {
        const storedLocale = getCookie('NEXT_LOCALE');
        if (storedLocale) {
            setLocale(storedLocale);
        } else {
            setLocale('en')
        }
    }, []);


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link" className={`text-white font-poppins font-[300] text-[16px] cursor-pointer`}>
                    {locale === 'en' && 'English'}
                    {locale === 'fa' && 'فارسی'}
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4">
                <DropdownMenuCheckboxItem
                >
                    <Link
                        href={`${locale === 'en' ? '/fa' : '/en'}`}
                        className={`text-white`}
                    >
                        {locale === 'en' && 'Persian'}
                        {locale === 'fa' && 'English'}
                    </Link>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageDropdown