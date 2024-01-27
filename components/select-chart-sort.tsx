"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useChartStore } from "@/app/store";

export default function SelectChartSort() {
    const { setPeriod } = useChartStore();

    return (
        <Select
            aria-label="Select Chart Sort"
            onChange={(e) => setPeriod(e.target.value)}
            radius="full"
            size="sm"
            variant="bordered"
            defaultSelectedKeys={["Monthly"]}
            // className="rounded-full bg-green-500"
            classNames={{
                trigger: "h-10 min-h-unit-10",
            }}
        >
            <SelectItem key={"Weekly"} value={"Weekly"}>
                Weekly
            </SelectItem>
            <SelectItem key={"Monthly"} value={"Monthly"}>
                Monthly
            </SelectItem>
            <SelectItem key={"Yearly"} value={"Yearly"}>
                Yearly
            </SelectItem>
        </Select>
    );
}
