import { AlertCircle } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

interface JobListErrorProps {
    message?: string;
    showResetFilters?: boolean;
    onRetry?: () => void;
    onReset?: () => void;
}

const JobListError = ({ message = "Error loading jobs", showResetFilters, onRetry, onReset }: JobListErrorProps) => (
    <div className="h-full w-full md:w-100 shrink-0 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
        <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
            <HugeiconsIcon icon={AlertCircle} className="text-zinc-400 size-6" />
        </div>
        <p className="text-sm font-semibold text-zinc-900 mb-1 uppercase tracking-tight">Oops! Something failed</p>
        <p className="text-xs text-zinc-500 mb-6 leading-relaxed">{message}</p>

        <div className="flex flex-col w-fit gap-2 px-8">
            {onRetry && (
                <Button onClick={onRetry} size="sm" className="rounded-full font-bold">
                    Retry fetch
                </Button>
            )}
            {showResetFilters && (
                <Button onClick={onReset} variant="ghost" size="sm" className="text-primary hover:bg-primary/5 font-bold">
                    Clear all filters
                </Button>
            )}
        </div>
    </div>
);

export default JobListError