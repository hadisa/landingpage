import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

const Bars = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M16 112h416c8.844 0 16-7.156 16-15.1S440.8 80 432 80h-416C7.156 80 0 87.16 0 95.1S7.156 112 16 112zM432 240h-416C7.156 240 0 247.2 0 256s7.156 16 16 16h416C440.8 272 448 264.8 448 256S440.8 240 432 240zM432 400h-416c-8.844 0-16 7.156-16 15.1S7.156 432 16 432h416c8.844 0 16-7.156 16-15.1S440.8 400 432 400z" />
  </svg>,
  "Bars"
);

export default Bars;