import {
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
} from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

import { Chip } from "@nextui-org/react";
import { PerformanceChipProp } from "@/lib/definitions";

export default function PerformanceChip({
    variant,
    percentage,
}: PerformanceChipProp) {
    return (
        <Chip
            size="sm"
            radius="full"
            className={twMerge(
                "p-1 text-[#34CAA5] text-xs",
                variant === "uptrend" && "bg-[#34CAA5]/20 text-[#34CAA5]",
                variant === "downtrend" && "bg-[#ED544E]/20 text-[#ED544E]"
            )}
        >
            <div className="flex items-center justify-center gap-x-2">
                {variant === "uptrend" && (
                    <ArrowTrendingUpIcon className="w-4 h-4" />
                )}

                {variant === "downtrend" && (
                    <ArrowTrendingDownIcon className="w-4 h-4" />
                )}
                <span className="block">{percentage}%</span>
            </div>
        </Chip>
    );
}
