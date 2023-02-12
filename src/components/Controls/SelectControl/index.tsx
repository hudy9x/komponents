import { Dispatch, SetStateAction, useState } from "react"
import { ListProvider } from "./context"
import SelectButton from "./SelectButton"
import SelectItem from "./SelectItem"
import SelectOptions from "./SelectOptions"
import { FormikFunc, ListItemValue } from "./type"
import "./style.css"

interface SelectControlProps {
  title?: string
  name?: string
  value: ListItemValue
  onFormikChange?: FormikFunc
  onChange?: Dispatch<SetStateAction<ListItemValue>>
  children: JSX.Element[]
}

export default function SelectControl({
  name,
  value,
  onChange,
  onFormikChange,
  children
}: SelectControlProps) {
  const [visible, setVisible] = useState(false)
  return <div className={`select-container ${visible ? '' : 'select-none'}`}>
    <ListProvider value={{ value, onChange, visible, setVisible, name, onFormikChange }} >
      {children}
    </ListProvider>
  </div>
}

SelectControl.Button = SelectButton
SelectControl.Options = SelectOptions
SelectControl.Item = SelectItem

