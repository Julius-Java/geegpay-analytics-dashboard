import { columns } from "./order-columns";
import { DataTable } from "./ui/data-table";
import { lastOrders } from "@/lib/last-orders-data";
export default function LastOrders() {
    return (
        <div className="p-4 border rounded-lg bg-white mt-5">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold sm:text-lg md:text-xl">Last Orders</h2>
                <span className="block text-[#34CAA5] text-sm">see all</span>
            </div>
            <DataTable columns={columns} data={lastOrders} />
        </div>
    );
}
