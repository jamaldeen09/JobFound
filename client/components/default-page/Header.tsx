"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = (): React.ReactElement => {
  // Hook returns the current next js route/path
  const pathname = usePathname();

  // Boolean to determine if the current path/route is
  // my custom signup route
  const isSignupPage = pathname === "/" || pathname === "/signup"
  return (
    <header className="w-full flex justify-between items-center border-b border-zinc-200 p-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="h-4 w-4 bg-primary rounded-sm" />
        <h1 className="text-xs font-bold tracking-[0.2em] uppercase">JobFound</h1>
      </Link>

      <Link
        href={isSignupPage ? "/login" : "/signup"}
        className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
      >
        {isSignupPage ? "Log In" : "Sign Up"}
      </Link>
    </header>
  );
};

export default Header;