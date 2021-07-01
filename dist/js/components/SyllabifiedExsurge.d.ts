import React from "react";
import { SharedExsurgeProps } from "./Exsurge";
export interface SyllabifiedExsurgeProps extends SharedExsurgeProps {
    text: string;
    notation: string;
    isEasterTime?: boolean;
}
declare const SyllabifiedExsurge: React.FC<SyllabifiedExsurgeProps>;
export default SyllabifiedExsurge;
