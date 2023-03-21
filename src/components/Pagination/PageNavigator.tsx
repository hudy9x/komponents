import { usePaginate } from "./context";
import { LeftIcon, RightIcon } from "./PaginationIcons";

export const PagePrev = () => {
  const { current, setCurrent } = usePaginate()
  return (
    <span className="page-prev" onClick={() => {
      if (current === 1) return;
      setCurrent(current - 1)
    }} >
      <span className="sr-only">Previous</span>
      <LeftIcon className="h-4 w-4" />
    </span>
  );
};

export const PageNext = () => {
  const { current, setCurrent } = usePaginate()
  return (
    <span className="page-next" onClick={() => {
      setCurrent(current + 1)
    }}>
      <span className="sr-only">Next</span>
      <RightIcon className="h-4 w-4" />
    </span>
  );
};

export const PageDot = () => {
  return <span className="page-item">...</span>;
};
