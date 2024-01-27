import { create } from "zustand";
import { yearlyData, monthlyData, weeklyData } from "@/lib/chart-mock-data";

// Write a switch statement that returns the correct data based on the period

type ChartStore = {
    chartData: any;
    period: string;
    setPeriod: (period: string) => void;
    };

export const useChartStore = create<ChartStore>((set) => ({
  chartData: monthlyData,
  period: "Monthly",
  setPeriod: (period: string) => {
    switch (period) {
      case "Yearly":
        set({ chartData: yearlyData, period: "Yearly" });
        break;
      case "Monthly":
        set({ chartData: monthlyData, period: "Monthly" });
        break;
      case "Weekly":
        set({ chartData: weeklyData, period: "Weekly" });
        break;
      default:
        set({ chartData: yearlyData, period: "Yearly" });
    }
  },
}));
