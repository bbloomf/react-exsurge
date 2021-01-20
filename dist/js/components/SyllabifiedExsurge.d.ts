import React from "react";
import { SharedExsurgeProps } from './Exsurge';
declare type SyllabifiedExsurgeProps = {
    text: string;
    notation: string;
    isEasterTime?: boolean;
} & SharedExsurgeProps;
declare const SyllabifiedExsurge: React.FC<SyllabifiedExsurgeProps>;
export default SyllabifiedExsurge;
