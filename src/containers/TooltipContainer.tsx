import { Tooltip } from "../components";
import Button from "../components/Button";
import CodePreview from "./CodePreview";
import Column from "./Column";
import { TabContentHeader } from "./TabContentHeader";

const props= {
  title: "Tooltip",
  desc: "A simple text popup tip.",
  whenToUse: [
    "The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.",
    "To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.",
  ],
};
  
export default function TooltipContainer() {
  return (
    <div>
      <TabContentHeader {...props} />
      <h3>Examples</h3>
      <div className="">
        <Column>
          <CodePreview
            components={
              <div className="flex gap-3">
                <Tooltip title="Tooltip 1st" position="bottom center">
                  <Button title="Bottom center" />
                </Tooltip>
                <Tooltip title="Tooltip 2nd">
                  <Button title="Top center" />
                </Tooltip>
                <Tooltip title="Tooltip 3rd" position="left">
                  <Button title="Left " />
                </Tooltip>
                <Tooltip title="Tooltip 4th" position="right" >
                  <Button title="Right" />
                </Tooltip>
              </div>
            }
            codes={[
              {
                type: "typescript",
                content: `function Demo(){
return <>
    <Tooltip title="Tooltip 1st" position="bottom center">
      <Button title="Bottom center" />
    </Tooltip>

    <Tooltip title="Tooltip 2nd">
      <Button title="Top center" />
    </Tooltip>

    <Tooltip title="Tooltip 3rd" position="left">
      <Button title="Left " />
    </Tooltip>

    <Tooltip title="Tooltip 4th" position="right" >
      <Button title="Right" />
    </Tooltip>
</>
}`,
              },
            ]}
          />
        </Column>
      </div>
    </div>
  );
}
