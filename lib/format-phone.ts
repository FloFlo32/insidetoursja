/** Formats "+18765668156" as "+1 876-566-8156" (source site's display format). */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length === 11) {
    return `+${digits[0]} ${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
}
