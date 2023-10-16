export function translateStatus(status: string) {
    switch (status.toLowerCase()) {
      case "released":
        return "Lançado";
      case "upcoming":
        return "Próximo";
      default:
        return "Desconhecido";
    }
  }