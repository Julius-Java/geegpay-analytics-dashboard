"use client";

import { Select, SelectItem } from "@nextui-org/react";

export default function SelectChartSort() {
    return (
        <Select
            radius="full"
            size="sm"
            variant="bordered"
            defaultSelectedKeys={["Weekly"]}
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
