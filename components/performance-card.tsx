import { Card, CardBody } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import PerformanceChip from "./peformance-chip";
import UptrendLineChart from "./uptrend-line-chart";
import DownTrendLineChart from "./downtrend-line-chart";

type PerformanceCardProp = {
    variant: "uptrend" | "downtrend";
    icon: StaticImageData;
    title: string;
    data: number | string;
    percentage: string;
};

export default function PerformanceCard({
    variant,
    icon,
    title,
    data,
    percentage,
}: PerformanceCardProp) {
    return (
        <Card className="p-[10px] sm:p-[16px] w-full">
            <CardBody>
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center justify-between">
                        <Image src={icon} alt="" width={24} height={24} />
                        <div className="w-[50%] h-[70px]">
                            {/* <UptrendLineChart /> */}
                            {/* <DownTrendLineChart /> */}
                            {variant === "uptrend" && <UptrendLineChart />}
                            {variant === "downtrend" && <DownTrendLineChart />}
                        </div>
                    </div>
                    <div>
                        <p className="text-[#898989] text-xl">{title}</p>
                        <p className="font-bold text-xl">{data}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            {/* <PerformanceChip
                                variant="uptrend"
                                percentage="23.5"
                            /> */}
                            {variant === "uptrend" && (
                                <PerformanceChip
                                    variant="uptrend"
                                    percentage={percentage}
                                />
                            )}

                            {variant === "downtrend" && (
                                <PerformanceChip
                                    variant="downtrend"
                                    percentage={percentage}
                                />
                            )}
                        </div>
                        <span className="block text-sm text-[#898989] ml-1">
                            vs. previous month
                        </span>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
