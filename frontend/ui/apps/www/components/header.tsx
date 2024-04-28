"use client"

import type { NextPage } from "next";
import { useCallback } from "react";
import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/registry/default/ui/select"

export function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

const Header: NextPage = () => {
    const onButtonsContainerClick = useCallback(() => {
        // Please sync "Log In - Welcome" to the project
    }, []);

    return (
        <section className="!sticky !top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <header className="h-[88px] flex-1 flex flex-col items-start lg:justify-start py-5 px-0 box-border gap-[20px] max-w-full text-left text-8xl text-blueviolet-200 font-headings-desktop-poppins-16px-regular">
                <div className="w-[158px] h-12 hidden" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full">
                        <div className="w-[143px] flex flex-col items-start justify-start pt-[14.5px] pb-0 pr-4 pl-0 box-border">
                            <h2 className="m-0 self-stretch relative text-inherit leading-[19px] font-bold font-inherit whitespace-nowrap">
                                <span>u</span>
                                <span className="text-shade-white">STUDY</span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 mq1225:flex-1">
                            <div className="w-px h-10 relative bg-neutrals-3" />
                        </div>
                        <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border max-w-full mq1225:hidden">
                            <nav className="m-0 w-[468.9px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-lightsteelblue-200 font-dm-sans">
                                <div className="relative inline-block min-w-[46.9px] shrink-0">
                                    About
                                </div>
                                <div className="relative inline-block min-w-[76px] shrink-0">
                                    Calculator
                                </div>
                                <div className="relative inline-block min-w-[63px] shrink-0">
                                    Colleges
                                </div>
                                <div className="relative inline-block min-w-[124px] whitespace-nowrap shrink-0">
                                    Career guidance
                                </div>
                                <div className="relative inline-block min-w-[31px] shrink-0">
                                    FAQ
                                </div>
                            </nav>
                        </nav>
                        <div className="flex flex-row items-center justify-start gap-[24px] text-center text-base text-shade-white font-dm-sans">
                            <Select>
                                <SelectTrigger className="w-[80px] !py-6">
                                    <SelectValue placeholder="EN" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Languages</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <img
                                className="h-[65px] w-[65px]"
                                alt=""
                                src="/burger-menu.png"
                            />

                            <div
                                className="flex flex-row items-start justify-start cursor-pointer mq1225:hidden"
                                onClick={onButtonsContainerClick}
                            >
                                <div className="rounded bg-blueviolet-200 flex flex-row items-center justify-center py-4 px-[23px] whitespace-nowrap">
                                    <b className="relative leading-[16px] inline-block min-w-[112px]">
                                        Sign Up/Log In
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-px relative bg-neutrals-2 overflow-hidden shrink-0" />
            </header>
        </section>
    )
};

export default Header;
