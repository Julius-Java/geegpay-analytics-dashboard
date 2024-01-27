"use client";
import { Progress } from "@nextui-org/react";
import { currencyFormatter } from "@/lib/utils";

type PlatformCardProps = {
    name: string;
    amount: number;
    percentage: string;
    indicatorColor: string;
};

export default function PlatformCard({
    name,
    amount,
    percentage,
    indicatorColor,
}: PlatformCardProps) {
    // Randomly generate a number between 30 and 100
    const random = Math.floor(Math.random() * 70) + 30;
    return (
        <div className="flex flex-col gap-y-3">
            <h3 className="font-bold text-[#26282C]">{name}</h3>
            <Progress
                aria-label="Platform Performance"
                value={random}
                className="w-full"
                classNames={{
                    indicator: indicatorColor,
                }}
            />
            <div className="flex items-center justify-between text-[#525252]">
                <p className="">{currencyFormatter(amount)}</p>
                <p>{percentage}</p>
            </div>
        </div>
    );
}
