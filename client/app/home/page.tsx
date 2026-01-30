"use client"
import React from "react";
import { mockJobs } from "@/app/data/jobs-data";
import JobList from "@/components/reusable/JobList";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Navbar from "@/components/home-page/Navbar";

const HomePage = (): React.ReactElement => {
    return (
        <div className="flex flex-col h-screen bg-[#F8F8F8] overflow-hidden">
            {/* ===== Fixed navbar ===== */}
            <Navbar />

            {/* ===== Centralized wrapper ===== */}
            <div className="max-w-282 w-full flex-1 flex flex-col mx-auto border-x border-zinc-200 overflow-hidden ">

                {/* Sub-header (to show the total number of jobs fetched) */}
                <div className="h-fit border-b border-zinc-200 flex flex-col p-2 bg-white shrink-0">
                    {/* Pagination result combined into a string */}
                    <span className="text-lg">Backend developer in the eurapean union</span>

                    {/* Total jobs available based on the filters */}
                    <span className="text-xs text-zinc-500 font-medium">3,000+ results</span>
                </div>

                {/* Main content wrapper */}
                <main className="flex flex-1 overflow-hidden">
                    <div className="w-full md:w-100 shrink-0 border-r border-zinc-200 flex flex-col bg-white overflow-hidden">

                        {/* Jobs list */}
                        <div className="flex-1 overflow-y-auto element-scrollable-hidden-scrollbar">
                            <div className="divide-y divide-zinc-100">
                                {mockJobs.map((job, i) => (
                                    <JobList
                                        key={i}
                                        {...job}
                                        isSelected={i === 0}
                                        onClick={() => { }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sticky pagination area */}
                        <div className="p-3 border-t border-zinc-200 bg-white shrink-0">
                            <Pagination>
                                <PaginationContent className="scale-90 flex-wrap justify-center">
                                    <PaginationItem>
                                        <PaginationPrevious href="#" className="h-8 px-2" />
                                    </PaginationItem>

                                    {/* On a 400px sidebar, we only show a few numbers to avoid overcrowding */}
                                    <PaginationItem className="hidden sm:block">
                                        <PaginationLink href="#" isActive className="h-8 w-8">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="hidden sm:block">
                                        <PaginationLink href="#" className="h-8 w-8">2</PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationNext href="#" className="h-8 px-2" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>

                    <div className="hidden md:block flex-1 overflow-y-auto bg-white">
                        <div className="p-8 max-w-4xl">
                            {/* Detailed content here... */}
                            <h1 className="text-2xl font-semibold">Junior Full Stack Engineer</h1>
                            {/* ... rest of your content */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;