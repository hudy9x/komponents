import { useState } from "react";
import { Checkbox } from "../components";
import Button from "../components/Button";

export default function CheckboxControlContainer() {
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [log, setLog] = useState("");

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="space-x-3">
          <Button
            title={checked ? "Uncheck" : "Checked"}
            onClick={() => setChecked(!checked)}
          />
          <Button
            title={disabled ? "Enabled" : "Disabled"}
            onClick={() => setDisabled(!disabled)}
          />
        </div>
        {log ? <div className="mt-1">{`log: ${log}`}</div> : null}
        <div className="mt-1">
          <Checkbox
            checked={checked}
            onChange={(checked) => {
              setLog(checked + "");
              setChecked(checked)
            }}
            disabled={disabled}
            desc="This is a checkbox"
          />
          <Checkbox
            checked={checked}
            disabled={disabled}
            desc="This is a checkbox"
          />
        </div>
      </div>
    </>
  );
}
