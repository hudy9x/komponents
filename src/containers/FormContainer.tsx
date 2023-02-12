import { useFormik } from "formik"
import * as Yup from "yup"
import { Input, Textarea } from "../components/Controls"
import { messageSuccess } from "../components/Message"

const SigninSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  about: Yup.string().min(10).max(100)
})

export default function FormContainer() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      about: ''
    },
    onSubmit: (values) => {
      SigninSchema.validate(values, {abortEarly: false}).then(valid => {
        console.log('valid', valid)
        messageSuccess("Submit ok !")
      }).catch(err => {
          if (!err.inner.length) return 

          const errors = err.inner as Yup.ValidationError[];
          const errorMessages = {username: '', password: '', about: ''}

          errors.forEach(error => {
            if (!error.message || !error.path) return;

            errorMessages[error.path as keyof typeof errorMessages] = error.message
          })

          formik.setErrors(errorMessages)

        })
    }
  })


  return <div className="border bg-white p-6 shadow-lg rounded-lg w-[500px]">
    <h2 className="text-lg font-medium leading-6 text-gray-900">Profile</h2>
    <p className="mt-1 text-sm text-gray-500">
      This information will be displayed publicly so be careful what you share
    </p>
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 mt-4">
      <Input
        title="Username"
        error={formik.errors.username}
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <Input
        title="Password"
        type="password"
        name="password"
        error={formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Textarea
        title="About"
        name="about"
        error={formik.errors.about}
        value={formik.values.about}
        onChange={formik.handleChange}
      />

      <button className="btn btn-primary">Submit</button>
      
    </form>
  </div>
}
