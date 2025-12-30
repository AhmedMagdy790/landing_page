import { useEffect, useRef, useState } from "react";

export default function Animate({ children, type = "fade", direction = "top", delay = 0, duration = 700, style = '' }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  // التحقق من reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if(ref.current) observer.unobserve(ref.current);
    };
  }, [delay, prefersReducedMotion]);

  let translateClass = "";
  if (!prefersReducedMotion) {
    switch(direction) {
      case "top": translateClass = show ? "translate-y-0" : "translate-y-10"; break;
      case "bottom": translateClass = show ? "translate-y-0" : "-translate-y-10"; break;
      case "left": translateClass = show ? "translate-x-0" : "translate-x-10"; break;
      case "right": translateClass = show ? "translate-x-0" : "-translate-x-10"; break;
    }
  }

  const opacityClass = type === "fade" && !prefersReducedMotion ? (show ? "opacity-100" : "opacity-0") : "opacity-100";

  return (
    <div
      ref={ref}
      style={{ transitionDuration: prefersReducedMotion ? "0ms" : `${duration}ms` }}
      className={`transition-all ease-out ${translateClass} ${opacityClass} ${style}`}
    >
      {children}
    </div>
  );
}
