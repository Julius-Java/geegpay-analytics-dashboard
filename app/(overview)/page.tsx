import SalesTrends from "@/components/sales-trends";
import LastOrders from "@/components/last-orders";
import MarketPerformance from "@/components/market-performance";
import TopPlatforms from "@/components/top-platforms";

export default function Home() {
    return (
        <main>
            <div className="p-4 xl:grid xl:grid-cols-4 gap-4 xl:justify-between">
                <section className="xl:col-span-2 mb-4">
                    <SalesTrends />
                    <LastOrders />
                </section>
                <section className="xl:col-span-2">
                    <MarketPerformance />
                    <TopPlatforms />
                </section>
            </div>
        </main>
    );
}
