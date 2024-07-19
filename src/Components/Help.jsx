import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./Accordion";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs';
import { LuBrainCog } from "react-icons/lu";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { PiCode } from "react-icons/pi";
import { LuActivity } from "react-icons/lu";
import { TbCloudComputing } from "react-icons/tb";
import { GiServerRack } from "react-icons/gi";
// import { ChevronDownIcon } from '@radix-ui/react-icons';

function Help() {
    return (
        <div id="help" className="h-fit bg-[#121a25] flex flex-col mt-20">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Help</h2>
            <div className="text-[#e9e9e9] my-10 flex w-full justify-center px-4 lg:px-0">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full lg:w-[90%] p-4 lg:p-8 border-none"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1" className="mb-4 lg:mb-8 mt-4 lg:mt-8">
                        <AccordionTrigger className="text-xl flex justify-between">
                            <div className="flex align-middle gap-4 justify-center">
                                <AiOutlineQuestionCircle size={30} className="hidden md:block lg:hidden" />
                                <p className="text-[#e9e9e9]">Can we place trade in multiple accout at once?</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                            Yes, our primary service empowers users to execute orders across multiple accounts with a single click.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="mb-4 lg:mb-8">
                        <AccordionTrigger className="text-xl">
                            <div className="flex align-middle gap-4 justify-center">
                                <AiOutlineQuestionCircle size={30} className="hidden md:block lg:hidden" />
                                <p className="text-[#e9e9e9]">Is there any delay in placing the order at the moment?</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                            The execution does not necessarily delay within the app but depends on your internet connection.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="mb-4 lg:mb-8">
                        <AccordionTrigger className="text-xl">
                            <div className="flex align-middle gap-4 justify-center">
                                <AiOutlineQuestionCircle size={30} className="hidden md:block lg:hidden" />
                                <p className="text-[#e9e9e9]">Is the service suitable for normal users who trade in stock market?</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                            This service is designed not for individual stock traders but for professionals managing trading on behalf of clients across multiple accounts. It caters specifically to those who handle multiple client accounts and require efficient management capabilities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="mb-4 lg:mb-8">
                        <AccordionTrigger className="text-xl">
                            <div className="flex align-middle gap-4 justify-center">
                                <AiOutlineQuestionCircle size={30} className="hidden md:block lg:hidden" />
                                <p className="text-[#e9e9e9]">Is the service paid?</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                            Yes, it does charge a minimal amount for security reasons.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default Help;