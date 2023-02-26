import { useFormik } from "formik";
import { useState } from "react";
import { Input, List } from "../components/Controls";
import { ListItemValue } from "../components/Controls/ListControl/type";

const options: ListItemValue[] = [
  { id: "VN", title: "Viet Nam" },
  { id: "US", title: "United State" },
  { id: "JP", title: "Japan" },
]

export default function ListContainer() {
  const formik = useFormik({
    initialValues: {
      country: ""
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const [val, setVal] = useState(options[0])

  return <form onSubmit={formik.handleSubmit} className="p-4 border border-gray-300 rounded-md shadow-md bg-white flex flex-col gap-4 w-[300px]" >
    <Input title="Username" name="username" />
    <List
      value={val}
      onChange={setVal}
      name="country"
      onFormikChange={formik.setFieldValue}
      helper="You must select your country"
      required
      title="Country"
      placeholder="Select your country"
    >
      <List.Button>{val.title}</List.Button>
      <List.Options>
        {options.map(option => {
          return <List.Item key={option.id} value={option}>
            {option.title}
          </List.Item>
        })}
      </List.Options>

    </List>
  </form>
}
