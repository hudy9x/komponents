import { Checkbox } from "../components";
import CodePreview from "./CodePreview";
import Column from "./Column";
import { TabContentHeader } from "./TabContentHeader";

const props = {
  title: "Checkbox",
  desc: "Checkbox component.",
  whenToUse: [
    "Used for selecting multiple values from several options.",
    "If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.",
  ],
};

export default function CheckboxContainer() {
  return (
    <div>
      <TabContentHeader {...props} />
      <div className="mt-3">
        <h3>Examples</h3>
        <Column>
          <CodePreview
            components={
              <div className="flex flex-col gap-3">
                <Checkbox checked desc="This is a checkbox" />
              </div>
            }
            desc={"Basic usage of checkbox."}
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Checkbox checked desc="This is a checkbox" />
</>
}`,
              },
            ]}
          />
          <CodePreview
            components={
              <div className="flex flex-col gap-3">
                <Checkbox disabled desc="Disabled checkbox" />
                <Checkbox disabled checked desc="Disabled checkbox" />
              </div>
            }
            desc={"Disabled checkbox."}
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Checkbox disabled desc="Disabled checkbox" />
</>
}
`,
              },
            ]}
          />
        </Column>
      </div>
    </div>
  );
}
