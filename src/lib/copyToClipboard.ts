export default async function copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}
