import { Tooltip } from "../components";
import Button from "../components/Button";

export default function TooltipContainer() {
  return (
    <div>
      <div className="w-[150px] m-auto">
        <Tooltip title="Tooltip 1st" position="bottom center">
          <Button title="Bottom center" />
        </Tooltip>
        <Tooltip title="Tooltip 2nd">
          <Button title="click me" />
        </Tooltip>
        <Tooltip title="Tooltip 3rd">
          <Button title="Clickme" />
        </Tooltip>
        <Tooltip title="me">
          <Button title="click me" />
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
            <Button title="top right" />
          </Tooltip>
        </div>

        <div className="fixed right-0 bottom-0">
          <Tooltip title="Tooltip oiwueroiuo" position="top right">
            <Button title="click me bottom right" />
          </Tooltip>
        </div>

        <div className="fixed bottom-0 left-0">
          <Tooltip title="Tooltip oiwueroiuo" position="top left">
            <Button title="click me left bottom" />
          </Tooltip>
        </div>

        <div className="fixed left-0 top-0">
          <Tooltip title="Tooltip oiwueroiuo" position="bottom left">
            <Button title="click me left bottom" />
          </Tooltip>
        </div>

        <div className="fixed bottom-0 left-1/2">
          <Tooltip title="Tooltip oiwueroiuo">
            <Button title="click me left bottom" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
