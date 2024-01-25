export default function OverviewLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section>
            <nav></nav>
            <div>{children}</div>
        </section>
    );
}
