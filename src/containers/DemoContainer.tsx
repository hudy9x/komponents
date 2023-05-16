import { lazy, Suspense, useState } from "react";

const PaginationContainer = lazy(() => import("./PaginationContainer"));
const ListContainer = lazy(() => import("./ListContainer"));
const TooltipContainer = lazy(() => import("./TooltipContainer"));
const FormContainer = lazy(() => import("./FormContainer"));
const MessageContainer = lazy(() => import("./MessageContainer"));

export default function Demo() {
  const tabs = [
    {
      id: "pagination",
      title: "Pagination",
      content: PaginationContainer,
    },
    {
      id: "list",
      title: "List",
      content: ListContainer,
    },
    {
      id: "tooltip",
      title: "Tooltip",
      content: TooltipContainer,
    },
    {
      id: "form",
      title: "Form",
      content: FormContainer,
    },
    {
      id: "message",
      title: "Message",
      content: MessageContainer,
    },
  ];

  const [active, setActive] = useState("message");

  return (
    <div className="flex">
      <aside className="tab-sidebar">
        {tabs.map((tab) => {
          const isActive = tab.id === active ? "active" : "";
          return (
            <div
              key={tab.id}
              className={`tab-sidebar-item ${isActive}`}
              onClick={() => setActive(tab.id)}
            >
              # {tab.title}
            </div>
          );
        })}
      </aside>
      <main className="tab-contents">
        {tabs.map((tab) => {
          const TabContent = tab.content;
          const visible = tab.id === active ? "tab-content-active" : "hidden";

          return (
            <div className={`${visible}`}>
              <Suspense fallback={<div>...Loading</div>}>
                <TabContent />
              </Suspense>
            </div>
          );
        })}
      </main>
    </div>
  );
}

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
