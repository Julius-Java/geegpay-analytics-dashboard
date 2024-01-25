import { Input } from "@nextui-org/react";
import Image from "next/image";
import searchVector from "@/public/assets/layout/search-vector.png";
import calendarVector from "@/public/assets/layout/calender-vector.png";

const currentDate = new Date(); // Current date and time

const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
}).format(currentDate);

export default function OverviewLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section>
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-end mt-2">
                    <Image
                        src={calendarVector}
                        alt="Calendar"
                        width={15}
                        height={15}
                    />
                    <p className="text-[#A3A3A3] text-sm ml-2 block">
                        {formattedDate}
                    </p>
                </div>
                <Input
                    radius="full"
                    variant="bordered"
                    size="sm"
                    placeholder="Search..."
                    startContent={
                        <Image
                            src={searchVector}
                            alt="Search"
                            width={15}
                            height={15}
                        />
                    }
                    classNames={{
                        base: "bg-white mt-6 border border[#DADDDD] rounded-[27px] placeholder-gray-400 text-gray-700",
                        inputWrapper: "border-none",
                        input: "placeholder:text-[#A3A3A3]",
                    }}
                />
            </nav>
            <div>{children}</div>
        </section>
    );
}
