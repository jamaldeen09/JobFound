"use client"
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200 px-4
    flex flex-col">

      {/* ===== Top nav ===== */}
      <TopNav />

      {/* ===== Bottom nav ===== */}
      <BottomNav />
    </nav>
  );
};

export default Navbar