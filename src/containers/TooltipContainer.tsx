import { Tooltip } from "../components";

export default function TooltipContainer() {
  return (
    <div>
      <div className="h-[1000px]" >

        <Tooltip title="This is an title" >
          <button className="1238912">click me</button>
        </Tooltip>
        <Tooltip title="This is an title" >
          <button className="1238912">click me</button>
        </Tooltip>
        <Tooltip title="This is an title" >
          <button className="1238912">click me</button>
        </Tooltip>
      </div>
      <div className="h-[500px]">

        <Tooltip title="This is an title" >
          <button className="1238912">click me</button>
        </Tooltip>
      </div>
    </div>
  );
}
