import PlatformCard from "./platform-card";
export default function TopPlatforms() {
    return (
        <div className="p-4 border rounded-lg bg-white mt-5">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-[#26282C]">Top platforms</h2>
                <span className="block text-[#34CAA5] text-sm">see all</span>
            </div>
            <div className="flex flex-col gap-y-4">
                <PlatformCard
                    name="Book Bazaar"
                    amount={2500000}
                    percentage={"+15%"}
                    indicatorColor="bg-indigo-600"
                    value={65}
                />

                <PlatformCard
                    name="Artisan Aisle"
                    amount={1800000}
                    percentage="+10%"
                    indicatorColor="bg-blue-400"
                    value={50}
                />

                <PlatformCard
                    name="Toy Troop"
                    amount={1200000}
                    percentage="+8%"
                    indicatorColor="bg-amber-400"
                    value={40}
                />

                <PlatformCard
                    name="Fashion Fiesta"
                    amount={800000}
                    percentage="+5%"
                    indicatorColor="bg-red-500"
                    value={70}
                />

                <PlatformCard
                    name="Food Fair"
                    amount={500000}
                    percentage="+3%"
                    indicatorColor="bg-green-500"
                    value={30}
                />

                <PlatformCard
                    name="Tech Town"
                    amount={200000}
                    percentage="+1%"
                    indicatorColor="bg-purple-500"
                    value={82}
                />
            </div>
        </div>
    );
}
