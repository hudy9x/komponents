import { lazy, Suspense, useState } from "react";
import ButtonContainer from "../containers/ButtonContainer";

const PaginationContainer = lazy(
  () => import("../containers/PaginationContainer")
);
const ListContainer = lazy(() => import("../containers/ListContainer"));
const TooltipContainer = lazy(() => import("../containers/TooltipContainer"));
const FormContainer = lazy(() => import("../containers/FormContainer"));
const MessageContainer = lazy(() => import("../containers/MessageContainer"));

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
    {
      id: "button",
      title: "Button",
      content: ButtonContainer,
    },
  ];

  const [active, setActive] = useState("message");

  return (
    <div className="">
      <header>Header</header>
      <main className="flex">
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
        <div className="tab-contents">
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
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
