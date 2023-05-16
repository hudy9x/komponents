import {
  messageError,
  messageInfo,
  messageSuccess,
  messageWarning,
} from "../components";
import { TabContentHeader } from "./DemoContainer";

const props = {
  title: "Message",
  desc: "Display global messages as feedback in response to user operations.",
  whenToUse: [
    "To provide feedback such as success, warning, error etc.",
    "A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.",
  ],
};
export default function MessageContainer() {
  const success = () => {
    messageSuccess("This is a success message");
  };

  const errorHandler = () => {
    messageError("Your request has been failed");
  };
  const warningHandler = () => {
    messageWarning("Please make sure that this action can not be undo");
  };
  const inforHandler = () => {
    messageInfo("The message only shown one time");
  };
  return (
    <div>
      <TabContentHeader {...props} />
      <div className="mt-3">
        <h3>Examples</h3>
        <p className="space-x-4" >
          <button className="btn btn-primary" onClick={success}>
            Success message
          </button>
          <button className="btn" onClick={errorHandler}>
            Error message
          </button>
          <button className="btn" onClick={warningHandler}>
            Warning message
          </button>
          <button className="btn" onClick={inforHandler}>
            Info message
          </button>
        </p>
      </div>
    </div>
  );
}
