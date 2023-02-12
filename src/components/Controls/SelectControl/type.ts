import { Dispatch, SetStateAction } from "react"
export interface ListItemValue {
  id: string
  title: string
}

export type FormikFunc = (field: string, value: any) => void
export type ListOnChange = Dispatch<SetStateAction<ListItemValue>>

export interface ListContextProps {
  name?: string
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  value: ListItemValue
  onChange?: ListOnChange
  onFormikChange?: FormikFunc
}


