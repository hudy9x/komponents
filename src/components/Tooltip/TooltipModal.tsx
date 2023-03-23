import { useEffect, useRef, useState } from "react";
import "./style.css";
import { ITooltipModalProps } from "./type";

export default function TooltipModal({
  id,
  title,
  position = "top center"
}: ITooltipModalProps) {

  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPosition] = useState([0, 0]);
  const [visible, setVisible] = useState(false);
  const top = position.includes('top')
  // const left = position.includes('left')
  const right = position.includes('right')
  const bottom = position.includes('bottom')
  const center = position.includes('center')

  useEffect(() => {
    const elem = document.querySelector(`.tt-${id}`) as HTMLElement;

    const calculatePosition = () => {
      const tooltip = ref.current;
      if (!tooltip) return;

      let { top: t, left: l, height } = elem.getBoundingClientRect();
      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight
      const elemWidth = elem.offsetWidth;
      const offset = 5;

      if (center) {
        if (tooltipWidth > elemWidth) {
          l = l - (tooltipWidth - elemWidth) / 2;
        } else {
          l = l + (elemWidth - tooltipWidth) / 2;
        }
      }

      if (top) {
        const maxHeight = tooltipHeight > height ? tooltipHeight : height ;
        t = t - maxHeight - offset;
      }

      if (right) {
        if (tooltipWidth > elemWidth) {
          l = l - (tooltipWidth - elemWidth);
        } else {
          l = l + (elemWidth - tooltipWidth);
        }
      }

      if (bottom) {
        t = t + height + offset;
      }

      setPosition([t, l]);
    }


    calculatePosition()

    const onMouseOver = () => {
      calculatePosition()
      setVisible(true)
    };

    const onRemove = () => {
      setVisible(false);
    };

    if (elem) {
      elem.addEventListener("mouseover", onMouseOver);
      elem.addEventListener("mouseleave", onRemove);
    }

    return () => {
      elem && elem.removeEventListener("mouseover", onMouseOver);
      elem && elem.removeEventListener("mouseleave", onRemove);
    };
  // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={ref}
      className={`tooltip-modal ${visible ? "visible" : ""} `}
      style={{
        top: pos[0],
        left: pos[1],
      }}
    >
      {title}
    </div>
  );
}
