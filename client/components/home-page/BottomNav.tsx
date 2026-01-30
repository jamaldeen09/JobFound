import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { X } from "@hugeicons/core-free-icons";

// ** Select filters
const selectFilters = [
    ({
        label: "Date posted",
        initialOptionIdFormat: "label:date-posted",
        options: [
            ({
                id: `option:past-month`,
                value: "past-month",
                content: "Past month",
            }),

            ({
                id: `option:past-week`,
                value: "past-week",
                content: "Past week",
            }),

            ({
                id: `option:past-24-hr`,
                value: "past-24-hr",
                content: "Past 24 hours",
            }),
        ]
    }),

    ({
        label: "Work policy",
        initialOptionIdFormat: "label:work-policy",
        options: [
            ({
                id: `option:remote`,
                value: "remote",
                content: "Remote",
            }),

            ({
                id: `option:on-site`,
                value: "on-site",
                content: "On-Site",
            }),

            ({
                id: `option:hybrid`,
                value: "hybird",
                content: "Hybrid",
            }),
        ]
    }),

    ({
        label: "Employment type",
        initialOptionIdFormat: "label:employment-type",
        options: [
            ({
                id: `option:full-time`,
                value: "full-time",
                content: "Full time",
            }),

            ({
                id: `option:part-time`,
                value: "part-time",
                content: "Part time",
            }),

            ({
                id: `option:contract`,
                value: "contract",
                content: "Contract",
            }),

            ({
                id: `option:internship`,
                value: "internship",
                content: "Internship",
            }),
        ]
    }),
];



// ** ===== Bottom nav ===== ** \\
const BottomNav = (): React.ReactElement => {

    return (
        <div className="relative w-full">
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />

            <div className="w-full max-w-282 mx-auto h-14 flex items-center gap-4 overflow-x-auto overflow-y-hidden element-scrollable-hidden-scrollbar">
                <Button disabled size="sm" variant="outline">No filters</Button>

                {/* Divider */}
                <div className="flex-1 flex items-center gap-2 border-l border-sinc-300 px-4">
                    {/* Selects */}
                    {selectFilters.map((filter) => {
                        return (
                            <Select key={filter.initialOptionIdFormat}>
                                {/* ===== Select trigger */}
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder={filter.label} />
                                </SelectTrigger>

                                {/* ===== Select content ===== */}
                                <SelectContent position="popper">
                                    <SelectGroup>
                                        <SelectLabel className="flex items-center justify-between">
                                          <span>{filter.label}</span>

                                          {/* Reset button (shows if a filter is active) */}
                                          <Button size="icon-xs" className="bg-destructive/30 px-1 h-5 w-5" variant="destructive">
                                            <HugeiconsIcon icon={X} />
                                          </Button>
                                        </SelectLabel>

                                        {/* Select items/options */}
                                        {filter.options.map((option) => {
                                            return (
                                                <SelectItem
                                                    value={option.value}
                                                    key={`${filter.initialOptionIdFormat}-${option.id}`}
                                                >
                                                    {option.content}
                                                </SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default BottomNav;