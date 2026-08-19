import { useEffect } from "react";

export default function useScrollLock(locked: boolean) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (locked) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}