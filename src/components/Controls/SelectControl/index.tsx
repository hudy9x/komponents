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
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  helper?: string
  value: ListItemValue
  onFormikChange?: FormikFunc
  onChange?: Dispatch<SetStateAction<ListItemValue>>
  children: JSX.Element[]
}

export default function SelectControl({
  title,
  name,
  disabled,
  readOnly,
  helper,
  placeholder,
  value,
  onChange,
  onFormikChange,
  children
}: SelectControlProps) {
  const [visible, setVisible] = useState(false)
  const classes = [];

  disabled && classes.push("disabled")
  readOnly && classes.push("readonly")

  return <div className={`select-container form-control ${visible ? '' : 'select-none'}`}>
    {title ? <label>{title}</label> : null}
    <ListProvider value={{ value, onChange, visible, setVisible, name, onFormikChange }} >
      {children}
    </ListProvider>
      {helper ? <p>{helper}</p> : null}
  </div>
}

SelectControl.Button = SelectButton
SelectControl.Options = SelectOptions
SelectControl.Item = SelectItem

