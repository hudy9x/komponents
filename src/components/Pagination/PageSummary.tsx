import { usePaginate } from "./context";

export default function PageSummary() {
  const { current, limit, total } = usePaginate()
  const start = current === 1 ? 1 : (current - 1) * limit;
  const end = current * limit > total ? total : current * limit
  return (
    <div>
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">{start}</span> to{" "}
        <span className="font-medium">{end}</span> of{" "}
        <span className="font-medium">{total}</span> results
      </p>
    </div>
  );
}
