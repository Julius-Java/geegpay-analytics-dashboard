"use client";
import { Progress } from "@nextui-org/react";
import { currencyFormatter } from "@/lib/utils";

type PlatformCardProps = {
    name: string;
    amount: number;
    percentage: string;
    indicatorColor: string;
    value: number;
};

export default function PlatformCard({
    name,
    amount,
    percentage,
    indicatorColor,
    value,
}: PlatformCardProps) {
    // Randomly generate a number between 30 and 100
    // const random = Math.floor(Math.random() * 70) + 30;
    // Create an array of 6 colors in hex format and write a logic that randomly selects one of the colors
    const colors = [
        "bg-[#6160DC]",
        "bg-[#54C5EB]",
        "bg-[#FFB74A]",
        "bg-[#F7685B]",
        "bg-[#34CAA5]",
        "bg-[#FF8A65]",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div className="flex flex-col gap-y-3">
            <h3 className="font-bold text-[#26282C]">{name}</h3>
            <Progress
                aria-label="Platform Performance"
                value={value}
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
