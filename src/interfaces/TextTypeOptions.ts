import { TextOptions } from "./TextOptions";
import * as exsurge from "exsurge";

export type TextTypesOptions = {
  [P in keyof exsurge.TextTypes]?: TextOptions;
};
