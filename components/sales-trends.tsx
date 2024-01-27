import OverviewChart from "./overview-chart";
import SelectChartSort from "./select-chart-sort";

export default function SalesTrends() {
    return (
        <div className="border rounded-lg lg:h-[70vh] p-4 h-[50vh] w-full">
            <div className="mb-5 sm:flex sm:items-center sm:justify-between">
                <h2 className="font-bold sm:text-lg md:text-xl">Sales Trend</h2>
                <div className="flex items-center justify-end gap-x-3 mt-4 sm:m-0">
                    <span className="block font-medium text-xs md:text-sm">
                        Sort by:
                    </span>
                    <div className="w-[110px]">
                        <SelectChartSort />
                    </div>
                </div>
            </div>
            <OverviewChart />
        </div>
    );
}
