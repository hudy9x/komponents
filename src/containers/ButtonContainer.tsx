import { HiOutlineEye, HiOutlineCog } from "react-icons/hi";
import Button from "../components/Button";
import CodePreview from "./CodePreview";
import Column from "./Column";
import { TabContentHeader } from "./TabContentHeader";

const props = {
  title: "Button",
  desc: "To trigger an operation",
  whenToUse: [
    "Primary button: indicate the main action, one primary button at most in one section.",
    "Default button: indicate a series of actions without priority.",
    "Dashed button: used for adding action commonly.",
    "Text button: used for the most secondary action.",
    "Link button: used for external links.",
    "danger: used for actions of risk, like deletion or authorization.",
    "ghost: used in situations with complex background, home pages usually.",
    "disabled: when actions are not available.",
    "loading: add loading spinner in button, avoiding multiple submits too.",
  ],
};

export default function ButtonContainer() {
  return (
    <div>
      <TabContentHeader {...props} />
      <div className="mt-3">
        <h3>Examples</h3>
        <Column>
          <CodePreview
            components={
              <div className="space-x-2 space-y-2">
                <Button primary title="Primary button" />
                <Button title="Normal button" />
                <Button danger title="Danger button" />
                <Button warn title="Warning button" />
              </div>
            }
            desc="There are primary button, default button, dashed button, text button and link button."
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Button primary title="Primary button" />
    <Button title="Normal button" />
    <Button danger title="Danger button" />
    <Button warn title="Warning button" />
  </>;
}
`,
              },
            ]}
          />

          <CodePreview
            components={
              <div className="space-x-2">
                <Button
                  disabled
                  onClick={() => alert(1)}
                  title="Primary button"
                />
                <Button
                  primary
                  disabled
                  onClick={() => alert(1)}
                  title="Button"
                />
                <Button
                  danger
                  disabled
                  onClick={() => alert(1)}
                  title="Button"
                />
                <Button warn disabled onClick={() => alert(1)} title="Button" />
              </div>
            }
            desc="Disable status will be used for diabling user operation. For example: user has no permission"
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Button disabled onClick={() => alert(1)} title="Primary button" />
  </>;
}
`,
              },
            ]}
          />

          <CodePreview
            components={
              <div className="space-x-2 space-y-2">
                <Button loading title="Loading button" />
                <Button primary loading title="Loading button" />
                <Button warn loading title="Loading button" />
                <Button danger loading title="Loading button" />
              </div>
            }
            desc="Show loading status nearby button's title"
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Button loading title="Loading button" />
  </>;
}
`,
              },
            ]}
          />

          <CodePreview
            components={
              <div className="space-x-2">
                <Button leadingIcon={<HiOutlineEye />} title="View" />
                <Button
                  primary
                  leadingIcon={<HiOutlineCog />}
                  title="Setting page"
                />
              </div>
            }
            desc="Add icon at the beginning of the button"
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Button leadingIcon={<HiOutlineEye />} title="View" />
  </>;
}
`,
              },
            ]}
          />

          <CodePreview
            components={
              <div className="space-x-2 space-y-2">
                <Button loading size="sm" title="Small button" />
                <Button loading title="Normal button" />
                <Button loading size="lg" title="Large button" />
              </div>
            }
            desc="We supports a defalt button size as well as a large and small size."
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Button loading size="sm" title="Small button" />
    <Button loading title="Normal button" />
    <Button loading size="lg" title="Large button" />
  </>;
}
`,
              },
            ]}
          />

          <CodePreview
            components={
              <div className="space-y-2">
                <Button block title="Small button" />
                <Button block primary title="Small button" />
                <Button block danger title="Small button" />
                <Button block warn title="Small button" />
              </div>
            }
            desc="block property will make the button fit to its parent width."
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
  return <>
    <Button block title="Small button" />
  </>;
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
