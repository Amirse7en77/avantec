export const navItems = [
  { label: "خانه", target: "home" },
  { label: "ویژگی‌ها", target: "features" },
  { label: "اپلیکیشن", target: "apps" },
  { label: "دانلود", target: "downloads" },
  { label: "سوالات متداول", target: "faq" },
  
];
export  const handlePhoneCall = () => {
  const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // On mobile, open the call app
    window.location.href = `tel:09140791428

`;
  }
  // On desktop/web, do nothing
};
