import { HugeiconsIcon } from "@hugeicons/react";
import { Job } from "@hugeicons/core-free-icons";

const JobDetailEmptyState = () => (
    <div className="h-full flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-500
   md:flex flex-1">
        <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
            <HugeiconsIcon icon={Job} className="text-zinc-300 size-10" />
        </div>
        <h2 className="text-xl font-semibold text-zinc-900 mb-2">
            Select a job to view details
        </h2>
        <p className="text-sm text-zinc-500 max-w-[320px] leading-relaxed">
            Browse through the list on the left to find your next opportunity and see full descriptions, requirements, and more.
        </p>
    </div>
);

export default JobDetailEmptyState