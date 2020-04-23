import { TextOptions } from "./TextOptions";
import * as exsurge from "exsurge";
export declare type TextTypesOptions = {
    [P in keyof exsurge.TextTypes]?: TextOptions;
};
