import { usePaginate } from "./context";
import PageItem from "./PageItem";
import { PageDot } from "./PageNavigator";
import { generatePages } from "./utils";

export default function PageBody() {
  const { totalPage, maxPageDisplay } = usePaginate()
  const pages = generatePages(maxPageDisplay - 1);

  console.log(maxPageDisplay, totalPage)

  if (maxPageDisplay > totalPage) {
    return null
  }

  return (
    <>
      <PageDot />
      {pages.map((p) => {
        return <PageItem index={p.page} />;
      })}
      <PageDot />
    </>
  );
}
