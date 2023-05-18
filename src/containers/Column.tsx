import { Children } from "react";
interface IColumnProps {
  children: React.ReactNode;
}
export default function Column({ children }: IColumnProps) {
  const childrenArr = Children.toArray(children);
  const len = childrenArr.length;
  const half = len / 2;
  const headArr = childrenArr.slice(0, half);
  const tailArr = childrenArr.slice(half, len);

  return (
    <div
      className="grid gap-5 mt-8"
      style={{
        gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
      }}
    >
      <div className="space-y-5">{tailArr}</div>
      <div className="space-y-5">{headArr}</div>
    </div>
  );
}
