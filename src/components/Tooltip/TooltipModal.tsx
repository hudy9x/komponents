import { useEffect, useState } from "react";
import "./style.css"

export default function TooltipModal({id, title}: {id: string, title: string}) {
  console.log(title)
  const [position, setPosition] = useState([0,0])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const elem = document.querySelector(`#${id}`) as HTMLElement
    const onMouseOver = (ev: MouseEvent) => {
      console.log(elem)
      const {top, left, height} = elem.getBoundingClientRect()
      setPosition([top - height - 5, left])
      setVisible(true)
    }

    const onRemove = () => {
      setVisible(false)
    }

    console.log(elem)

    if (elem) {
      elem.addEventListener('mouseover', onMouseOver)
      elem.addEventListener('mouseleave', onRemove)
    }

    return () => {
      elem && elem.removeEventListener('mouseover', onMouseOver)
      elem && elem.removeEventListener('mouseleave', onRemove)
    }
  }, [])

  return <div className={`tooltip-modal ${visible ? "visible" : ""} `} 
    style={{
      top: position[0],
      left: position[1]
    }}>{title}</div>
}
