import { startTransition, useEffect, useState } from "react";

export function useScreenSize(userBreakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${userBreakpoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < userBreakpoint);
    };

    startTransition(() => {
      setIsMobile(window.innerWidth < userBreakpoint);
    });

    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < userBreakpoint);

    return () => mql.removeEventListener("change", onChange);
  }, [userBreakpoint]);

  return !!isMobile;
}
