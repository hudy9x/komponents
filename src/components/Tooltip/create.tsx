import { createRoot } from "react-dom/client"
import TooltipModal from "./TooltipModal"

const createContainer = (id: string) => {
  let container = document.querySelector(`#tooltip-wrapper-${id}`);
  console.log('12098098')
  if (!container) {
    container = document.createElement('div')
    container.id = `#tooltip-wrapper-${id}`
    document.body.appendChild(container)
  }

  return container;
}

export const createTooltip = (id: string, title: string) => {
  const container = createContainer(id);
  const root  = createRoot(container);

  root.render(<TooltipModal id={id} title={title}/>)

  return () => {
    root.unmount()
  }
}
