"use client";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    layouts,
    plugins,
} from "chart.js";

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function OverviewChart() {
    const [data, setData] = useState({
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "Novemeber",
            "December",
        ],
        datasets: [
            {
                label: "Sales",
                data: [
                    6000, 19000, 3000, 27000, 9000, 45000, 9000, 20000, 3000,
                    27000, 9000, 4000,
                ],
                backgroundColor: [
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.50)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                    "rgba(52, 202, 165, 0.10)",
                ],
                borderColor: "rgba(255, 99, 132, 0.2)",
                borderRadius: 100,
            },
        ],
    });

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart",
            },
        },
        layout: {
            padding: {
                top: 20,
                bottom: 100,
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    return <Bar data={data} options={options} />;
}
