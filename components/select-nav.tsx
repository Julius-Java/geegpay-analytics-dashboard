"use client";
import Image from "next/image";
import arrowVector from "@/public/assets/layout/arrow-right-vector.png";
import gearVector from "@/public/assets/layout/setting-vector.png";
import logoutVector from "@/public/assets/layout/logout-vector.png";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
    Avatar,
    User,
} from "@nextui-org/react";

import profilePic from "@/public/assets/layout/profile-pic.png";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import sunVector from "@/public/assets/layout/light-mode-vector.png";
import moonVector from "@/public/assets/layout/night-mode-vector.png";
import bellVector from "@/public/assets/layout/bell-vector.png";

export default function SelectNav() {
    return (
        <Dropdown
            placement="bottom-start"
            backdrop="blur"
            classNames={{
                base: "",
                content: "min-w-[100px]",
            }}
        >
            <DropdownTrigger>
                <div className="flex gap-x-1">
                    <Image
                        src={profilePic}
                        alt="profile-pic"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <ChevronDownIcon className="w-6" />
                </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownSection showDivider>
                    <DropdownItem key="view" className="h-14 gap-2">
                        <div className="flex items-center">
                            <Image
                                src={arrowVector}
                                alt=""
                                width={20}
                                height={20}
                                className="mx-auto"
                            />
                        </div>
                    </DropdownItem>
                    <DropdownItem key="settings" className="h-14 gap-2">
                        <div className="flex items-center">
                            <Image
                                src={gearVector}
                                alt=""
                                width={20}
                                height={20}
                                className="mx-auto"
                            />
                        </div>
                    </DropdownItem>
                    <DropdownItem key={"notification"}>
                        <div className="flex items-center">
                            <Image
                                src={bellVector}
                                alt="Notification"
                                width={20}
                                height={20}
                                className="mx-auto"
                            />
                        </div>
                    </DropdownItem>
                    <DropdownItem key="logout" className="h-14 gap-2">
                        <div className="flex items-center">
                            <Image
                                src={logoutVector}
                                alt=""
                                width={20}
                                height={20}
                                className="mx-auto"
                            />
                        </div>
                    </DropdownItem>
                </DropdownSection>

                {/* Theme Section */}
                <DropdownSection title={"Theme"}>
                    <DropdownItem
                        key="light"
                        classNames={{ base: "flex items-center" }}
                    >
                        <div className="p-1 rounded-full bg-[#34CAA5] flex items-center">
                            <Image
                                src={sunVector}
                                alt="Light Mode"
                                width={16}
                                height={16}
                                className="mx-auto"
                            />
                        </div>
                    </DropdownItem>

                    <DropdownItem key="dark">
                        <div className="flex items-center gap-x-3">
                            <Image
                                src={moonVector}
                                alt="Dark Mode"
                                width={16}
                                height={16}
                                className="mx-auto"
                            />
                        </div>
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
