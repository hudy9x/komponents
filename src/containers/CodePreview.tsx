import { ReactNode, useState } from "react";
import Hl from "react-highlight";

type TCodeContent = {
  type: "javascript" | "typescript";
  content: string;
};

interface ICodePreview {
  components: ReactNode;
  desc?: string;
  codes: TCodeContent[];
}
export default function CodePreview({ components, desc, codes }: ICodePreview) {
  const [active, setActive] = useState(-1);
  return (
    <div className="code-preview border rounded-md shadow-sm">
      <div className="code-showcase p-4">{components}</div>
      {desc ? (
        <div className="code-desc">
          <h3>Note</h3>
          <p>{desc}</p>
        </div>
      ) : null}
      <div className="code-language-tab flex justify-center items-center gap-2 border-t">
        {codes.map((code, index) => {
          const isActive = index === active ? "active" : "";
          return (
            <div
              key={code.type}
              className={`${isActive} text-gray-700 text-xs py-1.5 px-2 uppercase cursor-pointer`}
              onClick={() => {
                setActive(index === active ? -1 : index);
              }}
            >
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>

                {code.type}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {codes.map((code, index) => {
          const isActive = index === active ? "border-t" : "hidden";
          return (
            <div key={code.type} className={`${isActive} text-sm`}>
              <Hl className={code.type}>{code.content}</Hl>
            </div>
          );
        })}
      </div>
    </div>
  );
}
