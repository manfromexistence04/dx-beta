"use client"
/* eslint-disable tailwindcss/no-contradicting-classname */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/default/ui/accordion"
import { Button } from "@/registry/default/ui/button"
// import { Calculator } from "lucide-react"
import { useCallback } from "react"
import type { NextPage } from "next"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/registry/default/ui/table"

const Calculator: NextPage = () => {
    const onParallelProcessorClick = useCallback(() => {
        // Please sync "Landing new design" to the project
    }, [])

    return (
        <div className="font-headings-desktop-poppins-16px-regular text-21xl text-shade-white mq1050:box-border mq1050:px-6 mq750:gap-[24px] mq450:box-border mq450:pb-[23px] mq450:pt-[21px] relative z-[1] mx-auto mb-24 box-border flex w-[1200px] max-w-[90%] flex-col items-start justify-start gap-[48px] rounded-sm bg-[#804DFE] px-12 pb-[35px] pt-8 text-left">
            <div className="absolute inset-0 !m-0 size-full">
                <div className="absolute inset-0 size-full rounded [background:linear-gradient(-84.28deg,_)]" />
                <img
                    className="absolute inset-0 z-[1] size-full max-h-full max-w-full overflow-hidden"
                    alt=""
                    src="/mask-group-2.png"
                />
                <img
                    className="absolute inset-0 z-[2] size-full max-h-full max-w-full overflow-hidden"
                    alt=""
                    src="/mask-group-3.png"
                />
            </div>
            <h1 className="font-inherit mq750:text-13xl mq750:leading-[26px] mq450:text-5xl mq450:leading-[19px] relative z-[3] m-0 inline-block w-[577px] max-w-full font-bold leading-[32px] text-inherit">
                uSTUDY Calculator
            </h1>
            <div className="z-[2] hidden h-12 w-8 rounded" />
            <div className="z-[3] hidden h-12 w-[82px] rounded" />
            <div className="font-dm-sans mq1050:flex-wrap mq1050:gap-[34px] mq450:gap-[17px] flex w-[870px] max-w-full flex-row items-start justify-start gap-[69px] text-base">
                <div className="mq1050:flex-1 mq450:box-border mq450:pr-5 box-border flex min-w-[239px] max-w-full flex-[0.7745] flex-col items-start justify-start gap-[18.7px] py-0 pl-0 pr-[83px]">
                    <div className="flex flex-col items-start justify-start gap-[8px] self-stretch px-0 pb-[5.3px] pt-0">
                        <div className="relative z-[3] inline-block w-[246.5px] leading-[21px]">
                            Enter amount of score
                        </div>
                        <div className="border-shade-white bg-shade-white z-[3] flex flex-row items-start justify-start self-stretch border-DEFAULT border-solid px-[13px] pb-2 pt-3 shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)_inset]">
                            <div className="flex flex-1 flex-row items-start justify-between gap-[20px]">
                                <input
                                    className="font-dm-sans box-border flex h-5 w-[29px] flex-col items-start justify-start bg-transparent px-0 pb-0 pt-1 text-base font-bold text-black [border:none] [outline:none]"
                                    placeholder="100"
                                    type="text"
                                />
                                <img
                                    className="relative size-6"
                                    alt=""
                                    src="/coin-colorfull.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="box-border flex w-[236px] flex-row items-start justify-start px-0 pb-[5.6px] pt-0 text-xs">
                        <div className="rounded-21xl border-shade-white z-[3] flex flex-1 flex-row items-start justify-start gap-[13px] border-DEFAULT border-solid bg-gray-400 px-[15px] pb-1 pt-[3px]">
                            <div className="rounded-21xl border-shade-white relative box-border hidden h-[26px] w-[236px] border-DEFAULT border-solid bg-gray-400" />
                            <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
                                <img
                                    className="relative z-[4] size-2.5 shrink-0 overflow-hidden"
                                    alt=""
                                    src="/search.png"
                                />
                            </div>
                            <div className="relative z-[4] inline-block w-[158px] shrink-0 font-medium">
                                Choose the University
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start px-px py-0 text-center">
                        <div className="z-[3] flex flex-col items-start justify-start">
                            <div className="flex flex-row items-start justify-start gap-[12px]">
                                <button className="border-shade-white flex cursor-pointer flex-row items-center justify-center rounded border-DEFAULT border-solid bg-gray-500 p-3.5">
                                    <div className="flex flex-col items-center justify-center">
                                        <b className="font-dm-sans text-shade-white relative inline-block min-w-[73px] text-center text-base leading-[16px]">
                                            Astana IT
                                        </b>
                                    </div>
                                </button>
                                <div className="border-shade-white box-border flex w-[46px] flex-row items-center justify-center rounded border-DEFAULT border-solid p-3.5">
                                    <b className="relative inline-block min-w-[15px] leading-[16px]">
                                        IS
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="z-[3] flex cursor-pointer flex-row items-start justify-start bg-transparent p-0 [border:none]"
                        onClick={onParallelProcessorClick}
                    >
                        <div className="bg-shade-white flex flex-row items-start justify-start whitespace-nowrap rounded px-[31px] py-4">
                            <b className="font-dm-sans text-blueviolet-100 relative inline-block min-w-[122px] text-center text-base leading-[16px]">
                                Calculate again
                            </b>
                        </div>
                    </button>
                </div>
                <div className="box-border flex h-[196px] flex-col items-start justify-start px-0 pb-0 pt-3">
                    <div className="bg-plum relative z-[3] w-0.5 flex-1" />
                </div>
                <div className="mq1050:flex-1 box-border flex min-w-[235px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1 text-lg">
                    <div className="mq450:gap-[34px] flex flex-col items-start justify-start gap-[68px] self-stretch">
                        <div className="flex w-[158px] flex-col items-start justify-start gap-[12px]">
                            <div className="z-[4] flex flex-row items-center justify-between gap-[20px] self-stretch">
                                <div className="relative inline-block min-w-[48px] leading-[130%]">
                                    B057:
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="relative inline-block min-w-[36px] leading-[16px]">
                                            70%
                                        </div>
                                    </div>
                                    <img
                                        className="relative size-5"
                                        alt=""
                                        src="/coin-transparent.png"
                                    />
                                </div>
                            </div>
                            <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                                <div className="relative inline-block min-w-[49px] leading-[130%]">
                                    B058:
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[7px] text-center">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="relative inline-block min-w-[37px] leading-[16px]">
                                            65%
                                        </div>
                                    </div>
                                    <img
                                        className="relative size-5"
                                        alt=""
                                        src="/coin-transparent.png"
                                    />
                                </div>
                            </div>
                            <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                                <div className="relative inline-block min-w-[49px] leading-[130%]">
                                    B059:
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="relative inline-block min-w-[36px] leading-[16px]">
                                            62%
                                        </div>
                                    </div>
                                    <img
                                        className="relative size-5"
                                        alt=""
                                        src="/coin-transparent.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mq450:flex-wrap z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch text-3xl">
                            <h3 className="font-inherit mq450:text-lg mq450:leading-[23px] relative m-0 inline-block w-[19px] whitespace-pre-wrap font-medium leading-[29px] text-inherit">{`IS  `}</h3>
                            <div className="h-4 w-[39px]" />
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                                <div className="flex flex-row items-center justify-start">
                                    <div className="mq450:text-lg mq450:leading-[13px] relative inline-block min-w-[43px] font-medium leading-[16px]">
                                        75%
                                    </div>
                                </div>
                                <img
                                    className="relative size-5"
                                    alt=""
                                    src="/coin-transparent.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blueviolet-200 absolute bottom-[-158.8px] right-[-285px] z-[5] !m-0 size-[300px] rounded-[50%] [filter:blur(400px)]" />
        </div>
    )
}

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export function TableDemo() {
    return (
        <Table className="">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">University</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

const FrameComponent: NextPage = () => {
    return (
        <section className="min-h-screen">
            <div className="mq750:box-border mq750:pb-[55px] mq750:pl-[235px] mq750:pt-8 mq450:box-border mq450:pl-5 relative !m-0 box-border flex h-[244px] !w-full max-w-full flex-1 flex-row items-center justify-center gap-[20px] overflow-hidden bg-gray-200 !p-0 pb-[85px] pl-[470px] pr-0 pt-[50px]">
                <div className="relative z-0 hidden h-[248px] w-[1440px] max-w-full [background:linear-gradient(180deg,_)]" />
                <div className="flex w-full flex-col items-center justify-center">
                    <h1 className="title !m-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                        Calculate Your Future
                    </h1>
                    <span className="text-primary text-sm">Make your dream come by calcuting your victory.</span>
                </div>
                <img
                    className="absolute left-0 top-0 z-[1] lg:min-h-[300px] lg:min-w-[500px]"
                    alt=""
                    src="/left-shadow.png"
                />
                <img
                    className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 lg:min-h-[300px] lg:min-w-[500px]"
                    alt=""
                    src="/center-shadow.png"
                />
                <img
                    className="absolute right-0 top-0 z-[1] lg:min-h-[300px] lg:min-w-[500px]"
                    alt=""
                    src="/right-shadow.png"
                />
                <img
                    className="absolute left-1/3 top-0 z-[1] mx-auto size-[90%] -translate-x-1/2 object-contain lg:min-h-[300px] lg:min-w-[500px]"
                    alt=""
                    src="/looper-bg.png"
                />
            </div>
            <div className="faq-content mt-10 flex flex-col space-y-5">
                <Calculator />
                <div className="mx-auto !mb-32 rounded-md border p-5 lg:w-[1200px]">
                    <TableDemo />
                </div>

            </div>


        </section>
    )
}

export default FrameComponent
