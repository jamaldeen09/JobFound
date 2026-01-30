import React from "react";
import Header from "../default-page/Header";
import MinimalBranding from "../default-page/MinimalBranding";
import AuthFormSection from "../default-page/AuthFormSection";

const DefaultPage = (): React.ReactElement => {
    return (
        <div className="flex flex-col h-screen">
            {/* ===== Header ===== */}
            <Header />

            {/* ===== Main ===== */}
            <main className="flex items-center flex-1 h-full">
                {/* Left sidebar (Minimal branding) */}
                <MinimalBranding />

                {/* Auth form section */}
                <AuthFormSection />
            </main>
        </div>
    );
};

export default DefaultPage;