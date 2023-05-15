import ListContainer from "./containers/ListContainer";
import PaginationContainer from "./containers/PaginationContainer";
import TooltipContainer from "./containers/TooltipContainer";

function App() {
  return (
    <div
      id="wrapper"
      className=""
    >
      <ListContainer />
      <PaginationContainer />
      <TooltipContainer />

    </div>
  );
}

export default App;
