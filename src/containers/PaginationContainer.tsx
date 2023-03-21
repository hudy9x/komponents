import { Pagination } from "../components";

export default function PaginationContainer() {
  const onChange = (page: number) => {
    console.log(page)
  }
  return <div>
    <h2>Full pagination</h2>
    {/*
    <Pagination current={1} total={5}  onChange={onChange} />
    <Pagination current={1} total={12}  onChange={onChange} />
    <Pagination current={1} total={32}  onChange={onChange} />*/}
    <Pagination current={2} total={45}  onChange={onChange} />
    <Pagination current={1} total={76}  onChange={onChange} />
    <Pagination current={1} total={91} onChange={onChange}  />
    <Pagination current={7} total={91} onChange={onChange}  />
  </div>;
}
