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

export default function UptrendLineChart() {
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
                data: [0, 20, 10, 30, 15, 40, 20, 60, 30, 80, 40, 100],
                backgroundColor: "rgba(52, 202, 165, 0.2)",
                borderWidth: 1,
                borderColor: "#34CAA5",
                pointerBorderColor: "#34CAA5",
                tension: 0.5,
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
            //     color: "#34CAA5",
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
                radius: 1,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return <Line data={data} options={options} />;
}
