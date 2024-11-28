export function formatPriceToCents(value: number): number {
  return Math.round(value * 100);
}

export function formatPriceToReais(value: number): string {
  return `R$ ${(value / 100).toFixed(2).replace(".", ",")}`;
}

export function formatServiceDescription(durationInMinutes: number) {
    const hours = Math.floor(durationInMinutes / 60)
    const minutes = durationInMinutes % 60
    const minutesString = `${minutes} ${minutes > 1 ? "mins" : "min"}`
    const hoursString = `${hours} ${hours > 1 ? "hrs" : "hr"}`
  
    if (hours === 0) return minutesString
    if (minutes === 0) return hoursString
    return `${hoursString} ${minutesString}`
  }
