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
    id,
    className: [children.props.className, id].join(' ')
  })

  useEffect(() => {
    const unmount = createTooltip(id, title)

    return () => {
      unmount()
    }
  }, [])
  return <>{updatedChildren}</>;
}
