import { Tooltip } from "../components";

export default function TooltipContainer() {
  return (
    <div>
      <div className="w-[150px] m-auto">
        <Tooltip title="Tooltip 1st" position="bottom center">
          <button className="1238912">click me bottom center</button>
        </Tooltip>
        <Tooltip title="Tooltip 2nd">
          <button className="123">click me</button>
        </Tooltip>
        <Tooltip title="Tooltip 3rd">
          <button className="098091">click me</button>
        </Tooltip>
        <Tooltip title="me">
          <button className="098091">click me</button>
        </Tooltip>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>

        <div className="fixed right-0 top-0">
        <Tooltip title="Tooltip oiwueroiuo" position="right bottom">
            <button className="098091">top right</button>
          </Tooltip>
        </div>

        <div className="fixed right-0 bottom-0">
          <Tooltip title="Tooltip oiwueroiuo" position="top right">
            <button className="098091">click me bottom right</button>
          </Tooltip>
        </div>

        <div className="fixed bottom-0 left-0">
          <Tooltip title="Tooltip oiwueroiuo" position="top left">
            <button className="098091">click me left bottom</button>
          </Tooltip>
        </div>

        <div className="fixed left-0 top-0">
          <Tooltip title="Tooltip oiwueroiuo" position="bottom left">
            <button className="098091">click me top left</button>
          </Tooltip>
        </div>

        <div className="fixed bottom-0 left-1/2">
          <Tooltip title="Tooltip oiwueroiuo" >
            <button className="098091">click me bottom center</button>
          </Tooltip>
        </div>

      </div>
    </div>
  );
}
