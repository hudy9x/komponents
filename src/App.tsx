import { messageError, messageInfo, messageSuccess, messageWarning } from "./components/Message"

function App() {

  const onInfo = () => { messageInfo("Displays some information") }
  const onSuccess = () => { messageSuccess("Yep! the document has been created !") }
  const onError = () => { messageError("Ooops! there some errors here") }
  const onWarning = () => { messageWarning("Make sure that your double check this action") }

  return (
    <div id="wrapper" className="h-screen bg-gray-200 flex items-center justify-center" >
      <div className="flex items-center gap-8">
        <button onClick={onInfo} >Info</button>
        <button onClick={onSuccess} className="bg-indigo-600 text-white" >Success</button>
        <button onClick={onError} className="bg-red-400 text-white" >Alert</button>
        <button onClick={onWarning} className="bg-yellow-400 text-white" >Warning</button>
      </div>
    </div>
  );
}

export default App;
