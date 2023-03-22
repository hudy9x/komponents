import ListContainer from "./containers/ListContainer";
import PaginationContainer from "./containers/PaginationContainer";
import TooltipContainer from "./containers/TooltipContainer";

function App() {
  return (
    <div
      id="wrapper"
      className="h-screen bg-gray-200 flex flex-col gap-6 items-center justify-center"
    >
      {/*<ListContainer />*/}
      {/*<PaginationContainer />*/}
      <TooltipContainer />
    </div>
  );
}

export default App;
