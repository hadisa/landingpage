import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

const CalendarViewDay = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M384 64h-32V16C352 7.164 344.8 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.8 0 112 0S96 7.164 96 16V64H64C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V128C448 92.65 419.3 64 384 64zM32 224h96v64H32V224zM160 288V224h128v64H160zM288 320v64H160v-64H288zM32 320h96v64H32V320zM64 480c-17.67 0-32-14.33-32-32v-31.1h96V480H64zM160 480v-63.1h128V480H160zM416 448c0 17.67-14.33 32-32 32h-64v-63.1h96V448zM416 384h-96v-64h96V384zM416 288h-96V224h96V288zM416 192H32V128c0-17.67 14.33-32 32-32h320c17.67 0 32 14.33 32 32V192z" />
  </svg>,
  "CalendarViewDay"
);

export default CalendarViewDay;