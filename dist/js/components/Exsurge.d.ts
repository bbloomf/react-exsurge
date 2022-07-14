import React from "react";
import * as exsurge from "exsurge";
import { TextTypesOptions } from "../interfaces/TextTypeOptions";
export interface SharedExsurgeProps {
    useDropCap?: boolean;
    annotation?: string | string[];
    contentEditable?: boolean;
    alignment?: "english" | "latin";
    width?: number;
    height?: number;
    zoom?: number;
    selection?: exsurge.Selection;
    id?: string;
    style?: any;
    className?: string;
    svgClass?: string;
    supertitle?: string;
    title?: string;
    subtitle?: string;
    textLeft?: string;
    textRight?: string;
    defaultFont?: string;
    defaultColor?: string;
    defaultTitleAlignment?: string;
    font?: string;
    baseFontSize?: number;
    staffSize?: number;
    interSyllabicSpacing?: number;
    spaceBetweenSystems?: number;
    spaceAboveLyrics?: number;
    textStyles?: TextTypesOptions;
    onScoreUpdate?(score: exsurge.ChantScore, gabceHeaderLen: number): any;
    onRender?: () => void;
    onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): any;
    mapAnnotationSpansToTextLeft?: exsurge.AnnotationSpansToTextLeftMapper;
    contextCreated?: (ctxt: exsurge.ChantContext) => void;
}
export interface ExsurgeProps extends SharedExsurgeProps {
    gabc: string;
}
declare const Exsurge: React.FC<ExsurgeProps>;
export default Exsurge;
export * from "exsurge";
