import { createRoot } from "react-dom/client";
import TooltipModal from "./TooltipModal";
import { CreateTooltipFunc } from "./type";

const createContainer = (id: string) => {
  let container = document.querySelector(`.tooltip-wrapper-${id}`);
  if (!container) {
    container = document.createElement("div");
    container.classList.add(`tooltip-wrapper-${id}`);
    document.body.appendChild(container);
  }

  return container;
};

export const createTooltip: CreateTooltipFunc = ({
  id, title, ...rest
}) => {
  const container = createContainer(id);
  const root = createRoot(container);

  root.render(<TooltipModal id={id} title={title} {...rest}/>);

  return () => {
    root.unmount();
  };
};
