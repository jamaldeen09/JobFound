"use client"
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft } from "@hugeicons/core-free-icons";

const NotFoundPage = (): React.ReactElement => {
    return (
        <div className="flex items-center h-screen justify-center border-x border-zinc-200 bg-white px-4 py-12">
            <div className="max-w-sm w-full text-center space-y-8 sm:space-y-12">
                <div className="relative inline-block w-full">
                    <h2 className="text-[25vw] sm:text-[10rem] font-black tracking-tighter leading-none opacity-5 select-none">
                        404
                    </h2>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-lg sm:text-xl font-bold tracking-tight bg-white px-2">
                            Page not found
                        </p>
                    </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-62.5 mx-auto">
                    We couldn't find the page you're looking for. It might have been moved or deleted.
                </p>

                <Link href="/">
                    <Button className="h-14 sm:h-16 w-full rounded-none">
                        <HugeiconsIcon icon={ArrowLeft} className="size-6" />
                        TAKE ME HOME
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;