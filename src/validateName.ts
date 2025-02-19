export function validateName(name: string): boolean {
  const trimmedName = name.trim();
  const parts = trimmedName.split(' ');
  console.log(parts.length >= 2 && parts.every(part => part.length > 1))
  return parts.length >= 2 && parts.every(part => part.length > 1);
}