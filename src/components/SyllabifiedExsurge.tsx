import React from "react";
import { GabcSyllabified } from 'gabc-utils';

import Exsurge, { ExsurgeProps } from './Exsurge';

type SyllabifiedExsurgeProps = {
  text: string;
  notation: string;
  isEasterTime?: boolean;
} & ExsurgeProps;

const SyllabifiedExsurge: React.FC<SyllabifiedExsurgeProps> = ({
  text,
  notation,
  isEasterTime,
  gabc,
  ...otherProps
}: SyllabifiedExsurgeProps) => {
  gabc = GabcSyllabified.merge(text, notation, isEasterTime, otherProps.useDropCap);

  return (
    <Exsurge
      gabc={gabc}
      {...otherProps}
    />
  )
};

export default SyllabifiedExsurge;
