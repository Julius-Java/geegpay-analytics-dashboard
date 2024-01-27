import Image from "next/image";
import searchVector from "@/public/assets/layout/search-vector.png";
import calendarVector from "@/public/assets/layout/calender-vector.png";
import bellVector from "@/public/assets/layout/bell-vector.png";
import AccountDropdown from "@/components/account-dropdown";
import { Input } from "@nextui-org/react";

const currentDate = new Date(); // Current date and time

const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
}).format(currentDate);

export default function OverviewHeader() {
    return (
        <header>
            {/* Mobile Display */}
            <section className="md:hidden">
                <div className="flex items-center justify-end gap-x-2">
                    <Image
                        src={calendarVector}
                        alt="Date"
                        width={15}
                        height={15}
                    />
                    <p className="text-sm font-bold">{formattedDate}</p>
                </div>
                <div className="mt-3">
                    <Input
                        variant="bordered"
                        size="sm"
                        placeholder="Search..."
                        classNames={{
                            // base: "bg-red-500",
                            input: "placeholder:text-[#A3A3A3]",
                            inputWrapper:
                                "rounded-full bg-white border-[#DADDDD] bg-white border rounded-full",
                            // innerWrapper: "bg-red-500",
                        }}
                        startContent={
                            <Image
                                src={searchVector}
                                alt="Search"
                                width={20}
                                height={20}
                            />
                        }
                    />
                </div>
            </section>

            {/* Desktop Display */}
            <section className="hidden md:block ">
                <h1 className="font-bold mb-3  lg:hidden text-lg">Dashboard</h1>
                <div className="md:flex justify-between items-center gap-x-4">
                    <div className="flex items-center justify-between grow">
                        <h1 className="font-bold hidden lg:block text-lg">
                            Dashboard
                        </h1>
                        <div className="w-[250px] lg:w-[350px]">
                            <Input
                                variant="bordered"
                                size="sm"
                                placeholder="Search..."
                                classNames={{
                                    // base: "bg-red-500",
                                    input: "placeholder:text-[#A3A3A3]",
                                    inputWrapper:
                                        "rounded-full bg-white border-[#DADDDD] bg-white border rounded-full h-10",
                                    // innerWrapper: "h-6",
                                }}
                                startContent={
                                    <Image
                                        src={searchVector}
                                        alt="Search"
                                        width={16}
                                        height={16}
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <Image
                                src={calendarVector}
                                alt="Date"
                                width={15}
                                height={15}
                            />
                            <p className="text-sm font-medium">
                                {formattedDate}
                            </p>
                        </div>
                        <div className="w-[40px] h-[40px] p-[11px] flex items-center justify-center rounded-full border border-[#DADDDD]">
                            <Image
                                src={bellVector}
                                alt="Notifications"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div>
                            <AccountDropdown />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}
