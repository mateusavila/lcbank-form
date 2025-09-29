export const isMobile = () => {
  const ua = navigator.userAgent;
  const isMobileUA = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  const orientation = screen.orientation?.type || "not supported";

  console.log("User Agent:", ua);
  console.log("Detected Mobile by UA?", isMobileUA);
  console.log("Detected Small Screen?", isSmallScreen);
  console.log("Screen Orientation:", orientation);

  if (isMobileUA || isSmallScreen) {
    return true
  }
  return false
}