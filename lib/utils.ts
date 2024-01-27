import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function currencyFormatter(
  amount: number,
  minFractions?: number,
  maxFractions?: number
) {
  return new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: minFractions,
      maximumFractionDigits: maxFractions,
      currency: "USD",
  }).format(amount);
}
