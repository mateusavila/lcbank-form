export function validateName(name: string): boolean {
  const trimmedName = name.trim();
  const parts = trimmedName.split(' ')
  return parts.length >= 2 && parts.every(part => part.length > 1);
}