import { createContext, useContext } from "react";
import { ListContextProps } from "./type";

const ListContext = createContext<ListContextProps>({
  name: '',
  onFormikChange: () => {},
  visible: false,
  setVisible: () => {},
  value: {id: '', title: ''},
  onChange: () => {}
});
export const ListProvider = ListContext.Provider

export const useListContext = () => {
  const { value, onChange, visible, setVisible, onFormikChange, name } = useContext(ListContext)
  return { value, onChange, visible, setVisible, onFormikChange, name }
}
