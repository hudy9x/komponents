export default function PageSummary({ total }: { total: number }) {
  return (
    <div>
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to{" "}
        <span className="font-medium">10</span> of{" "}
        <span className="font-medium">{total}</span> results
      </p>
    </div>
  );
}
