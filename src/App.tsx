import { EnvelopeIcon } from "./assets/EnvelopIcon"
import { confirmAlert, confirmWarning } from "./components/Confirmbox"
import { Input, Textarea } from "./components/Controls"
import { messageError, messageInfo, messageSuccess, messageWarning } from "./components/Message"
import FormContainer from "./containers/FormContainer"

function App() {

  const onInfo = () => { messageInfo("Displays some information") }
  const onSuccess = () => { messageSuccess("Yep! the document has been created !") }
  const onError = () => { messageError("Ooops! there some errors here") }
  const onWarning = () => { messageWarning("Make sure that your double check this action") }

  const onConfirmWarning = () => {
    confirmWarning({
      message: "This action may affect to the operation of other users. Do you still want to continue doing this ?",
      yes: () => { messageSuccess("OK, this action is executed!") },
      no: () => { messageError("You cancelled this action") }
    })
  }
  const onConfirmAlert = () => {
    confirmAlert({
      message: "Are you sure you want to delete this document?. Remember that this action will delete the document permanently.",
      yes: () => { messageSuccess("Document has been deleted !") }
    })
  }

  return (
    <div id="wrapper" className="h-screen bg-gray-200 flex flex-col gap-6 items-center justify-center" >
      <div className="grid grid-cols-2 gap-4 p-8 border border-gray-300 shadow-sm bg-white rounded-md w-[800px]">

        <Input title="Title" name="title" />
        <Input name="no-title" placeholder="Input without title" />
        <Input title="Required Fields" name="email" required />
        <Input title="Input with addon" addon="https://" name="website" />
        <Input title="Input with leading icon" icon={<EnvelopeIcon className="w-6 h-6 text-gray-400" />} name="email" placeholder="sample@gmail.com" />
        <Input title="Readonly input" readOnly value="Can't edit it" name="email" placeholder="Can't edit it" />
        <Input title="Disabled input" disabled name="email" placeholder="Not submitted" />
        <Input title="Error input" name="error" error="Password is not correct !" />
        <Textarea title="Description" helper="Write at least 50 words about yourself." />
      </div>
      <div className="hidden items-center gap-8">
        <button onClick={onConfirmWarning} className="btn-warning" >Confirm warning</button>
        <button onClick={onConfirmAlert} className="btn-danger" >Confirm alert</button>
      </div>
      <div className="hidden items-center gap-8">
        <button onClick={onInfo} >Info</button>
        <button onClick={onSuccess} className="btn-primary" >Success</button>
        <button onClick={onError} className="btn-danger" >Alert</button>
        <button onClick={onWarning} className="btn-warning" >Warning</button>
      </div>
    </div>
  );
}

export default App;
