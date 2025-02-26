import { useState } from "react";
import styles from "./tooltip.module.css";


interface TooltipProps {
  text: string;
}

const Tooltip = ({ text }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.tooltipContainer}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      ❓
      {visible && <span className={styles.tooltip}>{text}</span>}
    </span>
  );
};

export default Tooltip;
