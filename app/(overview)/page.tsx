import SalesTrendsChart from "@/components/sales-trends-chart";

export default function Home() {
    return (
        <main>
            <div className="p-4 md:grid md:grid-cols-4 gap-4">
                <section className="border rounded-lg">
                    <SalesTrendsChart />
                </section>
                <section className=""></section>
            </div>
        </main>
    );
}
