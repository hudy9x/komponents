import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react"
import { ListProvider } from "./context"
import ListButton from "./ListButton"
import ListItem from "./ListItem"
import ListOptions from "./ListOptions"
import { useListContext } from "./context"
import { FormikFunc, ListItemValue } from "./type"
import "./style.css"

interface ListControlProps {
  title?: string
  name?: string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  helper?: string
  required?: boolean
  addon?: JSX.Element
  value: ListItemValue
  onFormikChange?: FormikFunc
  onChange?: Dispatch<SetStateAction<ListItemValue>>
  children: JSX.Element[]
}

const ListContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { setVisible } = useListContext()
  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement
      ev.stopPropagation();

      if (!target.closest(".select-wrapper")) {
        setVisible(false)
      }

    }

    const handleKeypress = (ev: KeyboardEvent) => {
      const key = ev.key.toLowerCase()

      if (key !== "escape") {
        return
      }
      setVisible(false)
    }

    document.addEventListener("mouseup", handleClickOutside)
    document.addEventListener("keyup", handleKeypress)
    return () => {
      document.removeEventListener("mouseup", handleClickOutside)
      document.removeEventListener("keyup", handleKeypress)
    }
  }, [])
  return <div ref={containerRef} className="select-wrapper">{children}</div>
}

export default function ListControl({
  title,
  name,
  required = false,
  addon,
  disabled,
  readOnly,
  helper,
  placeholder = "",
  value,
  onChange,
  onFormikChange,
  children
}: ListControlProps) {
  const [visible, setVisible] = useState(false)
  const classes = ["select-container form-control"];

  disabled && classes.push("disabled")
  readOnly && classes.push("readonly")
  required && classes.push("required")
  addon && classes.push("addon")

  return <div className={`${visible && !disabled && !readOnly ? '' : 'select-none'} ${classes.join(" ")}`}>
    {title ? <label>{title}</label> : null}
    <ListProvider value={{
      value,
      onChange,
      visible,
      setVisible,
      name,
      onFormikChange,
      placeholder,
      disabled,
      readOnly
    }} >
      <ListContainer>
        {children}
      </ListContainer>
    </ListProvider>
    {helper ? <p className="mt-2 text-sm text-gray-500">{helper}</p> : null}
  </div>
}

ListControl.Button = ListButton
ListControl.Options = ListOptions
ListControl.Item = ListItem

