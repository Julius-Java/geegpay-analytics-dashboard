"use client";
import React from "react";
import useDeviceWidth from "@/lib/useDeviceWidth";

function CellDate({ date }: { date: string }) {
    const width = useDeviceWidth();
    if (date.length > 5 && width < 640) {
        return <div className="text-[#525252]">{date.slice(0, 5) + "..."}</div>;
    }
    return <div className="text-[#525252]">{date}</div>;
}

export default CellDate;
