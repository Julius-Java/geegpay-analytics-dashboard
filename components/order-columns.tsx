"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Order } from "@/lib/definitions";
import OrderUser from "./order-user";
import downloadVector from "@/public/assets/layout/invoice-vector.png";
import Image from "next/image";
import { currencyFormatter } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export const columns: ColumnDef<Order, unknown>[] = [
    {
        accessorKey: "user",
        header: "Name",
        cell: ({ row }) => {
            const { user } = row.original;
            return <OrderUser name={user} />;
        },
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const { status } = row.original;
            // if paid, let color be #34CAA5, if Refund let color be #ED544E
            const color = status === "Paid" ? "#34CAA5" : "#ED544E";
            return <div className={twMerge(`text-[${color}]`)}>{status}</div>;
        },
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));
            const formatted = currencyFormatter(amount);
            // const formatted = new Intl.NumberFormat("en-US", {
            //     style: "currency",
            //     currency: "USD",
            // }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "invoice",
        header: () => <div className="">Invoice</div>,
        cell: ({ row }) => {
            // Return a link that downloads the invoice
            return (
                <a href="/geegpay-invoice.pdf" download={true}>
                    <div className="flex items-center gap-x-1">
                        <Image
                            src={downloadVector}
                            alt="download"
                            width={13}
                            height={13}
                        />
                        <p className="text-xs">View</p>
                    </div>
                </a>
            );
        },
    },
];
