'use client';
import { useEffect } from "react";

export default function ScrollController() {
  useEffect(() => {
    const updateScrollbar = () => {
      const hasVerticalScrollbar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      if (hasVerticalScrollbar && scrollbarWidth > 0) {
        document.body.style.setProperty('--deviceWidth', `calc(100vw - ${scrollbarWidth}px)`);
      } else {
        document.body.style.setProperty('--deviceWidth', '100vw');
      }
    };

    updateScrollbar();
    window.addEventListener('resize', updateScrollbar);
    window.addEventListener('scroll', updateScrollbar, true); // true = nasłuchuje na wszystkich potomkach

    // MutationObserver do wykrywania zmian w DOM (np. dynamiczne ładowanie treści)
    const observer = new MutationObserver(updateScrollbar);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });

    return () => {
      window.removeEventListener('resize', updateScrollbar);
      window.removeEventListener('scroll', updateScrollbar, true);
      observer.disconnect();
    };
  }, []);

  return null;
}