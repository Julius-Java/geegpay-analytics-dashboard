import OverviewChart from "./overview-chart";
import SelectChartSort from "./select-chart-sort";

export default function SalesTrendsChart() {
    return (
        <div className="rounded-lg lg:h-[70vh] p-4 h-[50vh] w-full">
            <div className="mb-5">
                <h2 className="font-semibold text-sm">Sales Trend</h2>
                <div className="flex items-center justify-between gap-x-3 mt-4 md:m-0">
                    <span className="block font-medium text-xs">Sort by:</span>
                    <div className="w-[110px]">
                        <SelectChartSort />
                    </div>
                </div>
            </div>
            <OverviewChart />
        </div>
    );
}
