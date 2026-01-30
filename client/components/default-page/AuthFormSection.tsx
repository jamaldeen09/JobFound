"use client"
import { usePathname } from "next/navigation";
import React from "react";
import Signup from "../auth/Signup";
import Login from "../auth/Login";

const AuthFormSection = (): React.ReactElement => {
    // Hook returns the current next js route/path
    const pathname = usePathname();
    return (
        <section className="flex-1 h-full flex justify-center items-center">
            {
                (pathname === "/" || pathname === "/signup") ? (<Signup />) :
                    (pathname === "/login") ? (<Login />) : (<></>)
            }
        </section>
    );
};

export default AuthFormSection;