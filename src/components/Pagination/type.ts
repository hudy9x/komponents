export interface IPaginationProps {
  current: number;
  total: number
  maxPageDisplay?: number
  limit?: number
}

export interface IPageContext {
  current: number
  setCurrent: (page: number) => void
  limit: number
  total: number
  totalPage: number
  maxPageDisplay: number
}
