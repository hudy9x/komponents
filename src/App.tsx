import { EnvelopeIcon } from "./assets/EnvelopIcon"
import { confirmAlert, confirmWarning } from "./components/Confirmbox"
import { Input, Textarea } from "./components/Controls"
import { messageError, messageInfo, messageSuccess, messageWarning } from "./components/Message"
import FormContainer from "./containers/FormContainer"
import SelectContainer from "./containers/SelectContainer"

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
      <SelectContainer />
    </div>
  );
}

export default App;
