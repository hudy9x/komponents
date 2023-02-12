import { useListContext } from "./context";
import SelectIcon, { XIcon } from "./SelectIcon";

export default function SelectButton({children}: { children: JSX.Element | string }) {
  const { visible, setVisible, onChange, name, onFormikChange } = useListContext()
  return <div className="select-button form-input group" onClick={() => setVisible(!visible)} >
    {children ? children : <span className="text-transparent">Option</span>}
    <div className="trailing-icon group-hover:text-gray-500">
      {children ? <XIcon onClick={(ev) => {
        ev.stopPropagation()
        setVisible(false)
        onChange && onChange({title: '', id: ''})
        name && onFormikChange && onFormikChange(name, {title: '', id: ''})
      }} /> : null }
      <SelectIcon/>
    </div>
  </div>
}
