import React from "react";
import { createRoot } from "react-dom/client";
import Test from "./Test";

const container = document.getElementById("root"),
  root = createRoot(container);

root.render(
  <>
    <Test />
    <Test>

    </Test>
  </>
);
