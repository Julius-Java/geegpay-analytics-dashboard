"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
    Avatar,
    User,
} from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function AccountDropdown() {
    return (
        <Dropdown placement="bottom-start" backdrop="blur">
            <DropdownTrigger>
                <div className="flex items-center gap-x-2 border p-2 rounded-full">
                    <User
                        as="button"
                        avatarProps={{
                            src: "https://i.imgur.com/O9MSaa5.png",
                        }}
                        className="transition-transform"
                        description="justin@gmail.com"
                        name="Justin Bergson"
                    />
                    <ChevronDownIcon className="w-6" />
                </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@JustinBergson</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                    Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
