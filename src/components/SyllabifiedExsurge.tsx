import React from "react";
import { GabcSyllabified } from 'gabc-utils';

import Exsurge, { SharedExsurgeProps } from './Exsurge';

type SyllabifiedExsurgeProps = {
  text: string;
  notation: string;
  isEasterTime?: boolean;
} & SharedExsurgeProps;

const SyllabifiedExsurge: React.FC<SyllabifiedExsurgeProps> = ({
  text,
  notation,
  isEasterTime,
  ...otherProps
}: SyllabifiedExsurgeProps) => {
  const gabc = GabcSyllabified.merge(text, notation, isEasterTime, otherProps.useDropCap);

  return (
    <Exsurge
      gabc={gabc}
      {...otherProps}
    />
  )
};

export default SyllabifiedExsurge;
