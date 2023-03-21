import { usePaginate } from "./context";
import PageItem from "./PageItem";
import { PageDot } from "./PageNavigator";
import { generatePages } from "./utils";

export default function PageTail() {
  const { maxPageDisplay } = usePaginate()
  const pages = generatePages(maxPageDisplay - 1);

  return (
    <>
      <PageDot />
      {pages.map((p) => {
        return <PageItem index={p.page} />;
      })}
    </>
  );
}
