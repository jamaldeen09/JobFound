"use client"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { HugeiconsIcon } from "@hugeicons/react";
import { Job, Location, Plus, Search, Task01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import useResizer from "@/app/hooks/useResizer";
import SearchAlertDialog from "./SearchAlertDialog";

const TopNav = (): React.ReactElement => {
    // Hook returns the current next js route/path
    const pathname = usePathname();

    // Hook returns if the inputed or desired screen size
    // is the same as the windows width
    const { isDesiredScreen } = useResizer(768);
    return (
        <div className="max-w-282 mx-auto h-14 flex items-center justify-between gap-4 w-full overflow-x-auto overflow-y-hidden element-scrollable-hidden-scrollbar">
            {/* ===== Left Side: Logo + Search ===== */}
            <div className="flex items-center flex-1 gap-2 md:gap-4">
                {/* Brand Logo */}
                <Link href="/" className="shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                        <span className="text-white font-bold text-xl"></span>
                    </div>
                </Link>

                {/* Responsive Search Bar */}
                <div className={`w-full md:w-fit flex items-center gap-2`}>
                    {/* Search Alert dialog trigger (smaller screens) */}
                    {isDesiredScreen && (<SearchAlertDialog />)}

                    {/* Title or company search bar (Larger screens)*/}
                    {!isDesiredScreen && (
                        <>
                            <div className="flex-1 lg:max-w-100">
                                <InputGroup className="bg-primary/10 border-transparent">
                                    <InputGroupAddon>
                                        <HugeiconsIcon icon={Search} size={18} className="text-zinc-600" />
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        className="focus-visible:ring-primary focus-visible:outline-primary"
                                        placeholder="Search by title or company"
                                    />
                                </InputGroup>
                            </div>

                            {/* Location search bar */}
                            <div className="flex-1 lg:max-w-100 ">
                                <InputGroup className="bg-primary/10 border-transparent">
                                    <InputGroupAddon>
                                        <HugeiconsIcon icon={Location} size={18} className="text-zinc-600" />
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        className="focus-visible:ring-primary focus-visible:outline-primary"
                                        placeholder="Location"
                                    />
                                </InputGroup>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* ===== Right Side: Navigation Links & Actions ===== */}
            <div className="flex items-center gap-1 sm:gap-4 md:gap-8 h-full">

                {/* Main Nav Items - Text hidden on mobile, icons only */}
                <div className="flex items-center h-full">
                    <Link
                        href="/jobs"
                        className={`flex flex-col items-center justify-center px-3 h-full border-b-2 transition-all duration-200 ${pathname === "/jobs"
                            ? "border-zinc-900 text-zinc-900"
                            : "border-transparent text-zinc-500 hover:text-zinc-900"
                            }`}
                    >
                        <HugeiconsIcon icon={Job} size={22} />
                        <span className="text-[10px] mt-1 font-medium">Jobs</span>
                    </Link>

                    <Link
                        href="/applications"
                        className={`flex flex-col items-center justify-center px-3 h-full border-b-2 transition-all duration-200 ${pathname === "/applications"
                            ? "border-zinc-900 text-zinc-900"
                            : "border-transparent text-zinc-500 hover:text-zinc-900"
                            }`}
                    >
                        <HugeiconsIcon icon={Task01Icon} size={22} />
                        <span className="text-[10px] mt-1 font-medium">Applications</span>
                    </Link>
                </div>

                {/* ===== Action Area ===== */}
                <div className="flex items-center gap-2 border-l border-zinc-100 pl-4 h-8">
                    <Link href="/post-job">
                        <Button
                            size={isDesiredScreen ? "icon-sm" : "sm"}
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white hover:border-transparent"
                        >
                            <HugeiconsIcon icon={Plus} size={16} className="md:mr-1" />
                            {!isDesiredScreen && "Post Job"}
                        </Button>
                    </Link>

                    {/* User Avatar Placeholder */}
                    <div className="w-8 h-8 rounded-full bg-zinc-200 cursor-pointer overflow-hidden border border-zinc-300">
                        <div className="w-full h-full bg-zinc-400 flex items-center justify-center text-[10px] text-white">
                            Me
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;