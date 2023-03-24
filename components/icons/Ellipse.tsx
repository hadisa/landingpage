import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

const Ellipse = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 224C238.3 224 224 238.3 224 256c0 17.67 14.33 32 32 32s32-14.33 32-32C288 238.3 273.7 224 256 224zM96 224C78.33 224 64 238.3 64 256c0 17.67 14.33 32 32 32s32-14.33 32-32C128 238.3 113.7 224 96 224zM416 224c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C448 238.3 433.7 224 416 224z" />
  </svg>,
  "Elipse"
);

export default Ellipse;
