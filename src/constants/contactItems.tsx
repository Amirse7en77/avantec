
import { FaComments, FaHeadset, FaInstagram, FaWhatsapp } from "react-icons/fa";


  const phoneNumber = "+989931449744";
  const instagramUsername = "avantec.co";
  const whatsappMessage = "سلام";

  const handleWhatsAppClick = () => {
    // Mobile-first approach
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Try to open the app first on mobile
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
      
      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      }, 1000);
    } else {
      // Desktop - use web version
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, '_blank');
    }
  };

  const handleInstagramClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Try to open the app first on mobile
      window.location.href = `instagram://user?username=${instagramUsername}`;
      
      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        window.open(`https://instagram.com/${instagramUsername}`, '_blank');
      }, 1000);
    } else {
      // Desktop - use web version
      window.open(`https://instagram.com/${instagramUsername}`, '_blank');
    }
  };
  const handlePhoneCall = (phoneNumber:string) => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, open the call app
      window.location.href = `tel:${phoneNumber}`;
    }
    // On desktop/web, do nothing
  };
 
  // Define contactItems AFTER the handler functions
  export const contactItems = [
    {
      icon: <FaHeadset />,
      title: 'پشتیبانی فنی',
      desc: '۲۴ ساعته، ۷ روز هفته',
      link: 'tel:0219196148',
      label: '021-9196148',
      action: () => handlePhoneCall('+98219196148')
    },
    {
      icon: <FaComments />,
      title: 'مشاوره فروش',
      desc: 'شنبه تا چهارشنبه، ۸ تا ۱۷',
      link: 'tel:09931449744',
      label: '09931449744',
     action: () => handlePhoneCall('+989931449744')
    },
    {
      icon: <FaWhatsapp />,
      title: 'واتس اپ',
      desc: 'پاسخ در کمتر از ۲۴ ساعت',
      link: null, // No direct link since we use custom handler
      label: '09931449744',
      action: handleWhatsAppClick
    },
    {
      icon: <FaInstagram />,
      title: 'اینستاگرام',
      desc: 'پاسخ در کمتر از ۲۴ ساعت',
      link: null, // No direct link since we use custom handler
      label: 'avantec.co',
      action: handleInstagramClick
    }
  ];