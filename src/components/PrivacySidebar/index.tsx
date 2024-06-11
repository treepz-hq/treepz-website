import React from 'react'
import { useState,useEffect } from 'react'
const PrivacySidebar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyPoint = 100; // Change this value based on your needs

      setIsSticky(scrollTop >= stickyPoint);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>PrivacySidebar</div>
  )
}

export default PrivacySidebar
