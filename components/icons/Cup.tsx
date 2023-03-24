import { createSvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

const Cup = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 696 622">
    <path d="M464 64H64C46.33 64 32 78.33 32 96v256c0 53.02 42.98 96 96 96h192c53.02 0 96-42.98 96-96V288h48C525.8 288 576 237.8 576 176S525.8 64 464 64zM384 352c0 35.29-28.71 64-64 64H128c-35.29 0-64-28.71-64-64V96h320V352zM464 256H416V96h48C508.1 96 544 131.9 544 176S508.1 256 464 256z" />
  </svg>,
  "Cup"
);

export default (props: SvgIconProps) => <Cup {...props} viewBox="0 0 32 32" />;