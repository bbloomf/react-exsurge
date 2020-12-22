import _pt from "prop-types";
import React from "react";
import { GabcSyllabified } from 'gabc-utils';
import Exsurge from './Exsurge';

const SyllabifiedExsurge = ({
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
  onKeyDown
}) => {
  const gabc = GabcSyllabified.merge(text, notation, isEasterTime, capitalizeInitial);
  return /*#__PURE__*/React.createElement(Exsurge, {
    gabc: gabc,
    useDropCap: useDropCap,
    annotation: annotation,
    contentEditable: contentEditable,
    alignment: alignment,
    width: width,
    height: height,
    zoom: zoom,
    selection: selection,
    id: id,
    style: style,
    className: className,
    supertitle: supertitle,
    title: title,
    subtitle: subtitle,
    textLeft: textLeft,
    textRight: textRight,
    defaultFont: defaultFont,
    defaultColor: defaultColor,
    defaultTitleAlignment: defaultTitleAlignment,
    font: font,
    staffSize: staffSize,
    baseFontSize: baseFontSize,
    interSyllabicSpacing: interSyllabicSpacing,
    spaceBetweenSystems: spaceBetweenSystems,
    spaceAboveLyrics: spaceAboveLyrics,
    textStyles: textStyles,
    onScoreUpdate: onScoreUpdate,
    onKeyDown: onKeyDown
  });
};

SyllabifiedExsurge.propTypes = {
  text: _pt.string.isRequired,
  notation: _pt.string.isRequired,
  isEasterTime: _pt.bool,
  capitalizeInitial: _pt.bool,
  useDropCap: _pt.bool,
  annotation: _pt.oneOfType([_pt.string, _pt.arrayOf(_pt.string)]),
  contentEditable: _pt.bool,
  alignment: _pt.oneOf(["english", "latin"]),
  width: _pt.number,
  height: _pt.number,
  zoom: _pt.number,
  id: _pt.string,
  style: _pt.any,
  className: _pt.string,
  supertitle: _pt.string,
  title: _pt.string,
  subtitle: _pt.string,
  textLeft: _pt.string,
  textRight: _pt.string,
  defaultFont: _pt.string,
  defaultColor: _pt.string,
  defaultTitleAlignment: _pt.string,
  font: _pt.string,
  baseFontSize: _pt.number,
  staffSize: _pt.number
};
export default SyllabifiedExsurge;
//# sourceMappingURL=SyllabifiedExsurge.js.map