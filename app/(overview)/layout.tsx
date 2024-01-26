import OverviewHeader from "@/components/overview-header";

export default function OverviewLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section>
            <div className="px-3 md:py-[20px] py-2">
                <OverviewHeader />
            </div>
            <div>{children}</div>
        </section>
    );
}
