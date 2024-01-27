"use client";
import { Line } from "react-chartjs-2";

import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

export default function DownTrendLineChart() {
    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                data: [100, 40, 80, 30, 60, 20, 40, 15, 30, 10, 20, 0],
                backgroundColor: "rgba(237, 84, 78, 0.2)",
                borderWidth: 1,
                borderColor: "#ED544E",
                pointerBorderColor: "#ED544E",
                tension: 0.2,
                fill: true,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            // backgroundColor: {
            //     color: "#ED544E",
            // },
        },
        scales: {
            x: {
                min: 0,
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    stepSize: 0.5,
                    display: false,
                },
            },
            y: {
                min: 1,
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
        elements: {
            point: {
                radius: 2,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return <Line data={data} options={options} />;
}
