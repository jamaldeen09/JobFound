import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location, Search } from "@hugeicons/core-free-icons";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

const SearchAlertDialog = (): React.ReactElement => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="w-full">
                <Button size="lg" variant="ghost" className="bg-primary/10 justify-start hover:bg-primary/20 text-muted-foreground">
                    <HugeiconsIcon icon={Search} />
                    Search
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-left">Search Jobs</AlertDialogTitle>
                    <AlertDialogDescription className="text-left">
                        Find your next opportunity by title, company, or location.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="flex flex-col gap-4 py-4">
                    {/* Title Search */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-zinc-500">What</label>
                        <InputGroup className="bg-primary/10 border-transparent">
                            <InputGroupAddon>
                                <HugeiconsIcon icon={Search} size={18} className="text-zinc-600" />
                            </InputGroupAddon>
                            <InputGroupInput
                                className="focus-visible:ring-primary"
                                placeholder="Title or company"
                            />
                        </InputGroup>
                    </div>

                    {/* Location Search */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-zinc-500">Where</label>
                        <InputGroup className="bg-primary/10 border-transparent">
                            <InputGroupAddon>
                                <HugeiconsIcon icon={Location} size={18} className="text-zinc-600" />
                            </InputGroupAddon>
                            <InputGroupInput
                                className="focus-visible:ring-primary"
                                placeholder="Location"
                            />
                        </InputGroup>
                    </div>
                </div>

                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                    <AlertDialogCancel className="w-full sm:w-auto rounded-full">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90">
                        Search Jobs
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default SearchAlertDialog;