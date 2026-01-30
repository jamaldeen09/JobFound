import { AlertCircle, Refresh } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";

interface JobDetailErrorProps {
    onRetry?: () => void;
    message?: string;
}

export const JobDetailError = ({ onRetry, message = "We couldn't load the job details." }: JobDetailErrorProps) => (
    <div className="h-full flex-col items-center justify-center p-12 text-center
    hidden md:flex flex-1">
        <div className="p-4 bg-red-50 rounded-full mb-6">
            <HugeiconsIcon icon={AlertCircle} className="text-red-600 size-10" />
        </div>
        <h2 className="text-xl font-bold text-zinc-900 mb-2">Unable to load job</h2>
        <p className="text-sm text-zinc-500 max-w-87.5 mb-8">
            {message} This might be due to a temporary connection issue or the posting may no longer be available.
        </p>

        {onRetry && (
            <Button
                onClick={onRetry}
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary/5 px-8 font-bold flex gap-2 hover:text-primary"
            >
                <HugeiconsIcon icon={Refresh} size={18} />
                Reload details
            </Button>
        )}
    </div>
);