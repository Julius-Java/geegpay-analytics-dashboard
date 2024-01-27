import PerformanceCard from "./performance-card";
import tickVector from "@/public/assets/box-tick-vector.png";
import refundVector from "@/public/assets/rotate-vector.png";
import shoppingCartVector from "@/public/assets/shopping-cart-vector.png";
import coinVector from "@/public/assets/coin-vector.png";
import { currencyFormatter } from "@/lib/utils";

export default function MarketPerformance() {
    return (
        <section className="flex flex-col gap-y-3 sm:grid sm:grid-cols-4 sm:gap-3">
            <div className="sm:col-span-2 flex flex-col gap-y-3">
                <PerformanceCard
                    variant="uptrend"
                    icon={tickVector}
                    title="Total Orders"
                    data={350}
                    percentage="23.5"
                />

                <PerformanceCard
                    variant="downtrend"
                    icon={refundVector}
                    title="Total Refunds"
                    data={270}
                    percentage="23.5"
                />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-y-3">
                <PerformanceCard
                    variant="downtrend"
                    icon={shoppingCartVector}
                    title="Average Sales"
                    data={1567}
                    percentage="23.5"
                />

                <PerformanceCard
                    variant="uptrend"
                    icon={coinVector}
                    title="Total Income"
                    data={currencyFormatter(350, 3, 3)}
                    percentage="23.5"
                />
            </div>
        </section>
    );
}
