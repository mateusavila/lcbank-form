export function validateName(name: string): boolean {
  const trimmedName = name.trim();

  // Verifica se há pelo menos um espaço e se as palavras têm mais de um caractere
  const parts = trimmedName.split(' ');
  return parts.length >= 2 && parts.every(part => part.length > 1);
}