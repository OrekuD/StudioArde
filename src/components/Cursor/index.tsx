import { motion, useMotionValue } from "framer-motion";
import classes from "./index.module.scss";
import React from "react";
import useCursorStore from "../../store/cursorStore";

export default function Cursor() {
  const cursorState = useCursorStore();
  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  };

  React.useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      mouse.x.set(event.clientX - 14 / 2);
      mouse.y.set(event.clientY - 14 / 2);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <motion.div
      className={classes["cursor"]}
      style={{
        top: mouse.y,
        left: mouse.x,
        backgroundColor: cursorState.type === "default" ? undefined : "#65A4D8",
      }}
    />
  );
}
