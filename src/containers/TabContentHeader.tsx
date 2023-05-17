
interface ITabHeaderProps {
  title: string;
  desc: string;
  whenToUse: string[];
}

export const TabContentHeader = ({
  title,
  desc,
  whenToUse,
}: ITabHeaderProps) => {
  return (
    <div className="tab-content-header">
      <h2 className="title">{title}</h2>
      <p className="paragraph">{desc}</p>
      <h3 className="title-lv3">When to use</h3>
      <p>
        <ul className="list">
          {whenToUse.map((use) => {
            return <li>{use}</li>;
          })}
        </ul>
      </p>
    </div>
  );
};
