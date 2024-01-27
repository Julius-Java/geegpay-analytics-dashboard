"use client";
import React from "react";
import { User } from "@nextui-org/react";
import useDeviceWidth from "@/lib/useDeviceWidth";

export default function OrderUser({ name }: { name: string }) {
    // if name is longer than 5 characters, truncate it
    const width = useDeviceWidth();

    if (name.length > 5 && width < 640) {
        name = name.substring(0, 5) + "...";
    }

    return (
        <User
            name={name}
            avatarProps={{
                src: "https://i.imgur.com/O9MSaa5.png",
                size: "sm",
            }}
        />
    );
}
