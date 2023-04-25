import { j as jsxs } from "./chunk-746fc63d.js";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
    "Counter ",
    count
  ] });
}
export {
  Counter as C
};
