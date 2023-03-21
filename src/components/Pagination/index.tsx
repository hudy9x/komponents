import { useState } from "react";
import { IPaginationProps } from "./type";
import "./style.css"
import { PageNext, PagePrev } from "./PageNavigator";
import PageSummary from "./PageSummary";
import PageHead from "./PageHead";
import PageBody from "./PageBody";
import PageTail from "./PageTail";
import { PageProvider } from "./context";

export default function PaginationContainer({
  current,
  total,
  maxPageDisplay = 5,
  limit = 10
}: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState(current)
  const totalPage = Math.ceil(total/limit)

  return <div className="page-wrapper">
    <PageProvider value={{
      current: currentPage,
      setCurrent: (page: number) => { setCurrentPage(page) },
      limit,
      total,
      totalPage,
      maxPageDisplay
    }}>
      <PageSummary total={total} />
      <div>
        <nav className="page-nav" aria-label="Pagination">
          <PagePrev/>
          <PageHead/>
          {/*<PageBody/>*/}
          {/*<PageTail/>*/}
          <PageNext/>
        </nav>
      </div>
    </PageProvider>
  </div>
}
