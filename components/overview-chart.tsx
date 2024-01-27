"use client";
import { Bar } from "react-chartjs-2";
import { monthlyData, weeklyData } from "@/lib/chart-mock-data";
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
import { useChartStore } from "@/app/store";

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function OverviewChart() {
    const { chartData } = useChartStore();

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        layout: {
            padding: {
                top: 20,
                bottom: 100,
            },
        },
        scales: {
            y: {
                grid: {
                    display: true,
                },
            },

            x: {
                grid: {
                    display: false,
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    return <Bar data={chartData} options={options} />;
}
