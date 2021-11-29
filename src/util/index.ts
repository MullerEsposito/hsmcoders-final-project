export function formatDate(date: Date): String {
  return `${date.getDate()} de ${capitalizeFirstLetter(date.toLocaleString("pt-BR", { month: "long"}))} de ${date.getFullYear()}`;
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}