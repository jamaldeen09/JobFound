"use client"
import { usePathname } from "next/navigation";
import React from "react";

const MinimalBranding = (): React.ReactElement => {
    // Hook returns the current next js route/path
    const pathname = usePathname();

    return (
        <div className="hidden lg:flex flex-col justify-center p-20 bg-[#F8F8F8] border-r border-zinc-200 relative h-full">
            <div className="space-y-6 relative z-10">
                <h2 className="text-7xl font-black tracking-normal leading-[0.9] uppercase">
                    {(pathname === "/" || pathname === "/signup") ? (<>Create<br />Account.</>) : (<>Welcome<br />Back.</>)}
                </h2>
                <p className="text-sm text-zinc-400 max-w-60 leading-relaxed">
                    {pathname === "/" || pathname === "/signup" ? "Join jobfound and start searching for jobs today." : "Log in to continue you job search journey."}
                </p>
            </div>
        </div>
    );
};

export default MinimalBranding;