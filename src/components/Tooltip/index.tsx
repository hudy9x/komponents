import { cloneElement, useEffect } from "react";
import { randomId } from "../utils";
import { createTooltip } from "./create";
import { ITooltipWrapper } from "./type";

export default function TooltipWrapper({ 
  children, 
  title, ...rest }: ITooltipWrapper) {
  const id = randomId();
  const updatedChildren = cloneElement(children, {
    className: [children.props.className, `tt-${id}`].join(" "),
  });

  useEffect(() => {
    createTooltip({id, title, ...rest});
    // eslint-disable-next-line
  }, []);
  return <>{updatedChildren}</>;
}
