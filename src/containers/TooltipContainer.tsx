import { Tooltip } from "../components";

export default function TooltipContainer() {
  return (
    <div>
      <div className="w-[100px] m-auto" >

        <Tooltip title="Tooltip 1st" >
          <button className="1238912">click me</button>
        </Tooltip>
        <Tooltip title="Tooltip 2nd" >
          <button className="123">click me</button>
        </Tooltip>
        <Tooltip title="Tooltip 3rd" >
          <button className="098091">click me</button>
        </Tooltip>
        <Tooltip title="me" >
          <button className="098091">click me</button>
        </Tooltip>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        
        <div className="fixed right-0 top-0">
          <Tooltip title="Tooltip oiwueroiuo" >
            <button className="098091">click me</button>
          </Tooltip>
        </div>

        <div className="fixed right-0 bottom-0">
          <Tooltip title="Tooltip oiwueroiuo" >
            <button className="098091">click me</button>
          </Tooltip>
        </div>

      </div>
    </div>
  );
}
