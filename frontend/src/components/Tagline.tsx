import { ReactNode } from "react";
import brackets from "./Brackets";
type TagLineType = {
  className: string;
  children: ReactNode;
}
const TagLine: React.FC<TagLineType> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
