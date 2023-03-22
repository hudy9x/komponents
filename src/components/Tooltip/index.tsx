import { cloneElement, useEffect } from "react";
import { randomId } from "../utils";
import { createTooltip } from "./create";

interface ITooltipProps {
  children: JSX.Element;
  title: string
}

export default function Tooltip({ children, title }: ITooltipProps) {
  const id = randomId()
  const updatedChildren = cloneElement(children, {
    className: [children.props.className, `tt-${id}`].join(' ')
  })

  useEffect(() => {
    const unmount = createTooltip(id, title)

    return () => {
      console.log('unmount called')
      // unmount()
    }
  }, [])
  return <>{updatedChildren}</>;
}
