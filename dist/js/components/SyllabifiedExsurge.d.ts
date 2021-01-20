import React from "react";
import { ExsurgeProps } from './Exsurge';
declare type SyllabifiedExsurgeProps = {
    text: string;
    notation: string;
    isEasterTime?: boolean;
} & ExsurgeProps;
declare const SyllabifiedExsurge: React.FC<SyllabifiedExsurgeProps>;
export default SyllabifiedExsurge;
