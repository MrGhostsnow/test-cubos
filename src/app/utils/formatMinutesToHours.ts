export function formatMinutesToHours(minutes: number) {
    if (typeof minutes !== "number") {
      return "Valor inválido";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h${remainingMinutes}min`;
  }