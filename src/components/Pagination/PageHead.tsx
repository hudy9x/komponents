import { usePaginate } from "./context";
import PageItem from "./PageItem"
import { PageDot } from "./PageNavigator"
import { generatePages } from "./utils";

export default function PageHead() {
  const { maxPageDisplay, current } = usePaginate()
  const pages = generatePages(maxPageDisplay - 1)

  return <>
    {pages.map(p => {
      return <PageItem index={p.page} active={current === p.page} />
    })}
    <PageDot />
  </>
}
