export function transformForPercent(value: number) {
    if (typeof value !== "number") {
      throw new Error("O argumento deve ser um número.");
    }
    const percent = (value * 10).toFixed(0);
    return `${percent}`;
  }