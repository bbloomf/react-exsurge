"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGabcMerge = void 0;

var useGabcMerge = function useGabcMerge(syllabifiedText, musicalNotation) {
  var useLargeInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _normalizeInputs = normalizeInputs(syllabifiedText, musicalNotation),
      text = _normalizeInputs.text,
      notation = _normalizeInputs.notation;

  if (!text) return notation;
  if (!notation) return text;

  var _splitInputs = splitInputs(text, notation),
      syllables = _splitInputs.syllables,
      notationNodes = _splitInputs.notationNodes;

  var sylNdx = 0;
  var isFirstSyl = true;
  var result = notationNodes.map(function (notation) {
    var _mapSyllable = mapSyllable(notation, syllables, sylNdx, isFirstSyl),
        syllable = _mapSyllable.syllable,
        nextIndex = _mapSyllable.nextIndex,
        isFirstSyllable = _mapSyllable.isFirstSyllable;

    sylNdx = nextIndex;
    isFirstSyl = isFirstSyllable;
    return syllable;
  }).join('').trim(); // add any additional syllables that come after the last notation data:

  while (sylNdx < syllables.length) {
    result += syllables[sylNdx++].replace(/^(\s*)"?\(?(.*?)\)?"?$/, '$1$2') + '()';
  }

  return result;
};
/*-----  REGEX DEFS  -----*/


exports.useGabcMerge = useGabcMerge;
var regexClef = /^[cf]b?[1-4]$/;
var regexNonSyllabicGabc = /^([cf]b?[1-4]|[,;:`]+|[a-m]\+|[zZ]0?)+$/;
var regexFindParensWithLeadSpaces = /^(\s*)\((.*)\)$/;
var regexFindParens = /^\((.*)\)$/;
/*-----  NORMALIZATION FUNCTIONS  -----*/

var normalizeInputs = function normalizeInputs(text, notation) {
  // normalize the text, getting rid of multiple consecutive whitespace,
  // and handling lilypond's \forceHyphen directive
  text = text.replace(/%[^\n]*(\n|$)/g, '$1').replace(/\s*\n\s*/g, '\n').replace(/(\s)\s+/g, '$1').replace(/\\forceHyphen\s+(\S+)\s+--\s+/g, '$1-').trim();
  notation = notation.replace(/%[^\n]*(\n|$)/g, '$1').trim();
  return {
    text: text,
    notation: notation
  };
};

var splitInputs = function splitInputs(text, notation) {
  var syllables = text.split(/\s+--\s+|\+|(\s*\(?"[^"]+"\)?-?)|(?=\s|(?<=[^\s-]-)[^\s-])/).filter(function (syl) {
    return syl && syl.trim();
  });
  var notationNodes = notation.split(/\s+/);
  return {
    syllables: syllables,
    notationNodes: notationNodes
  };
};
/*-----  STRING UTIL FUNCTIONS  -----*/


var stripParens = function stripParens(s) {
  return s.replace(regexFindParensWithLeadSpaces, '$1$2');
  s.replace(regexFindParens, '$1');
};
/*-----  GETTER FUNCTIONS  -----*/


var getSyllable = function getSyllable(syllables, index) {
  return (syllables[index] || ' ').replace(/^(\s*)"(.*)"$/, '$1$2');
};

var getNonSyllable = function getNonSyllable(syllables, syllableNdx, notation) {
  var syllable = syllables[syllableNdx];

  if (/^(\s*!|[^a-záéíóúýàèìòùäëïöüÿæœǽœ́]+$|\s*\(.*\)$|\s*"\(.*\)"$)/i.test(syllable) && !regexClef.test(notation)) {
    return syllable.replace(/^(\s*)!/, '$1').replace(/^(\s*)"?\((.*?)\)"?$/, '$1$2');
  }

  return ' ';
};
/*-----  PROCESSOR FUNCTIONS  -----*/


var mapSyllable = function mapSyllable(notation, syllables, sylNdx, isFirstSyllable) {
  var noSyllable = regexNonSyllabicGabc.test(notation) || /^\(.*\)$/.test(notation);
  notation = stripParens(notation);
  var syllable = noSyllable ? getNonSyllable(syllables, sylNdx, notation) : getSyllable(syllables, sylNdx++);

  if (!noSyllable) {
    var nextSyllable = syllable;
    syllable = stripParens(syllable);

    while (/^\s*\(.*\)$/.test(nextSyllable)) {
      if (/^".*"$/.test(syllable)) {
        syllable = syllable.slice(1, -1);
      }

      nextSyllable = getSyllable(syllables, sylNdx++);
      syllable += '()' + stripParens(nextSyllable);
    }

    if (isFirstSyllable) {
      isFirstSyllable = false;
      syllable = capitalizeInitial(syllable, syllables[sylNdx]);
    }
  }

  syllable = syllable + '(' + notation + ')';
  return {
    syllable: syllable,
    nextIndex: sylNdx,
    isFirstSyllable: isFirstSyllable
  };
};

var capitalizeInitial = function capitalizeInitial(syllable, nextSyllable) {
  if (/^\s*[a-záéíóúýàèìòùäëïöüÿæœǽœ́]+/i.test(syllable)) {
    // special capitalization rules for the large initial:
    // the second letter should also be capitalized, and the third as well,
    // if it is a three letter word
    syllable = syllable.slice(0, 2).toUpperCase() + syllable.slice(2).toLowerCase();

    if (syllable.length === 3 && /^\s/.test(nextSyllable)) {
      syllable = syllable.toUpperCase();
    }
  }

  return syllable;
};
//# sourceMappingURL=useGabcMerge.js.map