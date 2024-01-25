import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import SideNav from "../components/side-nav";
import UIProvider from "@/components/ui-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Analytics Dashboard",
    description: "Analytics Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={twMerge(inter.className)}>
                <UIProvider>
                    <section className="bg-white h-screen md:flex md:overflow-hidden">
                        {/* SIDE BAR - GENERAL LAYOUT */}
                        <div className="md:w-[80px] md:px-3 bg-[#F7F8FA] border-r border-solid border-[#EBECF2]">
                            <SideNav />
                        </div>
                        <div className="flex-grow md:overflow-y-auto">
                            {children}
                        </div>
                    </section>
                </UIProvider>
            </body>
        </html>
    );
}
