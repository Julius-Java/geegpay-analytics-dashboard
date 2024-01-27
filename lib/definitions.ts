import { StaticImageData } from "next/image";



export type Order = {
    id: string;
    user: string;
    date: string;
    amount: number;
    status: "Paid" | "Refund";
    invoice: string;
};

export type PerformanceChipProp = {variant :"uptrend" | "downtrend", percentage: string};
