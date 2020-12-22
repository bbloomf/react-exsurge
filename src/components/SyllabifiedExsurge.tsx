import React from "react";
import * as exsurge from "exsurge";
import { GabcSyllabified } from 'gabc-utils';

import Exsurge from './Exsurge';
import { TextTypesOptions } from "../interfaces/TextTypeOptions";

interface SyllabifiedExsurgeProps {
  text: string;
  notation: string;
  isEasterTime?: boolean;
  capitalizeInitial?: boolean;
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
  onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): any;
}

const SyllabifiedExsurge: React.FC<SyllabifiedExsurgeProps> = ({
  text,
  notation,
  isEasterTime,
  capitalizeInitial = true,
  useDropCap,
  annotation,
  contentEditable,
  alignment,
  width,
  height,
  zoom,
  selection,

  id,
  style,
  className,

  supertitle,
  title,
  subtitle,
  textLeft,
  textRight,

  defaultFont,
  defaultColor,
  defaultTitleAlignment,

  font,
  staffSize,
  baseFontSize,
  interSyllabicSpacing,
  spaceBetweenSystems,
  spaceAboveLyrics,

  textStyles,

  onScoreUpdate,
  onKeyDown,
}: SyllabifiedExsurgeProps) => {
  const gabc = GabcSyllabified.merge(text, notation, isEasterTime, capitalizeInitial);

  return (
    <Exsurge
      gabc={gabc}
      useDropCap={useDropCap}
      annotation={annotation}
      contentEditable={contentEditable}
      alignment={alignment}
      width={width}
      height={height}
      zoom={zoom}
      selection={selection}

      id={id}
      style={style}
      className={className}

      supertitle={supertitle}
      title={title}
      subtitle={subtitle}
      textLeft={textLeft}
      textRight={textRight}

      defaultFont={defaultFont}
      defaultColor={defaultColor}
      defaultTitleAlignment={defaultTitleAlignment}

      font={font}
      staffSize={staffSize}
      baseFontSize={baseFontSize}
      interSyllabicSpacing={interSyllabicSpacing}
      spaceBetweenSystems={spaceBetweenSystems}
      spaceAboveLyrics={spaceAboveLyrics}

      textStyles={textStyles}

      onScoreUpdate={onScoreUpdate}
      onKeyDown={onKeyDown}
    />
  )
};

export default SyllabifiedExsurge;
