import { createRoot } from "react-dom/client"
import TooltipModal from "./TooltipModal"

const createContainer = (id: string) => {
  let container = document.querySelector(`.tooltip-wrapper-${id}`);
  console.log('container:', container)
  if (!container) {
    container = document.createElement('div')
    container.classList.add(`tooltip-wrapper-${id}`)
    document.body.appendChild(container)
  }

  return container;
}

export const createTooltip = (id: string, title: string) => {
  console.log('called createTooltip')
  const container = createContainer(id);
  const root = createRoot(container);

  root.render(<TooltipModal id={id} title={title} />)

  return () => {
    root.unmount()
  }
}
