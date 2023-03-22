import { useEffect, useRef, useState } from "react";
import "./style.css"

export default function TooltipModal({ id, title }: { id: string, title: string }) {
  console.log(title)
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState([0, 0])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // const W = document.body.offsetWidth
    const elem = document.querySelector(`.tt-${id}`) as HTMLElement
    const onMouseOver = (ev: MouseEvent) => {
      const tooltip = ref.current;
      if (!tooltip) return;

      const { top, left, height  } = elem.getBoundingClientRect()
      // const tooltipWidth = tooltip.offsetWidth
      // const tooltipHeight = tooltip.offsetHeight
      // const offset = 5

      // console.log(top, left, height)

      setVisible(true)
      // if (top - height <= 0) {
      //   if (left <= 0) {
      //     setPosition([top + height + offset, 0])
      //     return;
      //   } 
      //
      //   console.log(left + tooltipWidth, W)
      //   if (left + tooltipWidth > W) {
      //     console.log('run here')
      //     const offsetLeft = (left + tooltipWidth) - W
      //     setPosition([top + height + offset, left - offsetLeft])
      //     return;
      //   }
      // }

      setPosition([top - height - 5, left])
      // setVisible(true)
    }

    const onRemove = () => {
      setVisible(false)
    }

    if (elem) {
      elem.addEventListener('mouseover', onMouseOver)
      elem.addEventListener('mouseleave', onRemove)
    }

    return () => {
      elem && elem.removeEventListener('mouseover', onMouseOver)
      elem && elem.removeEventListener('mouseleave', onRemove)
    }
  }, [])

  return <div ref={ref} className={`tooltip-modal ${visible ? "visible" : ""} `}
    style={{
      top: position[0],
      left: position[1]
    }}>{title}</div>
}
