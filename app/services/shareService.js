export function shareMessage(message) {
  const shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(message);
  window.open(shareUrl, "_blank", "noopener,noreferrer");
}
