import OverviewHeader from "@/components/overview-header";

export default function OverviewLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section>
            <div className="px-3 md:py-[20px] py-2 md:bg-[#F7F8FA] md:border-b border-solid border-[#EBECF2]">
                <OverviewHeader />
            </div>
            <div>{children}</div>
        </section>
    );
}
