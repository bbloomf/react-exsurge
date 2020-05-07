export const useGabcMerge = (syllabifiedText, musicalNotation, useLargeInitial = true) => {
  const {
    text,
    notation
  } = normalizeInputs(syllabifiedText, musicalNotation);
  if (!text) return notation;
  if (!notation) return text;
  const {
    syllables,
    notationNodes
  } = splitInputs(text, notation);
  let sylNdx = 0;
  let isFirstSyl = true;
  let result = notationNodes.map(notation => {
    const {
      syllable,
      nextIndex,
      isFirstSyllable
    } = mapSyllable(notation, syllables, sylNdx, isFirstSyl);
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

const regexClef = /^[cf]b?[1-4]$/;
const regexNonSyllabicGabc = /^([cf]b?[1-4]|[,;:`]+|[a-m]\+|[zZ]0?)+$/;
const regexFindParensWithLeadSpaces = /^(\s*)\((.*)\)$/;
const regexFindParens = /^\((.*)\)$/;
/*-----  NORMALIZATION FUNCTIONS  -----*/

const normalizeInputs = (text, notation) => {
  // normalize the text, getting rid of multiple consecutive whitespace,
  // and handling lilypond's \forceHyphen directive
  text = text.replace(/%[^\n]*(\n|$)/g, '$1').replace(/\s*\n\s*/g, '\n').replace(/(\s)\s+/g, '$1').replace(/\\forceHyphen\s+(\S+)\s+--\s+/g, '$1-').trim();
  notation = notation.replace(/%[^\n]*(\n|$)/g, '$1').trim();
  return {
    text,
    notation
  };
};

const splitInputs = (text, notation) => {
  const syllables = text.split(/\s+--\s+|\+|(\s*\(?"[^"]+"\)?-?)|([^\s-+]+-)(?=[^\s-])|(?=\s)/).filter(syl => syl && syl.trim());
  const notationNodes = notation.split(/\s+/);
  return {
    syllables,
    notationNodes
  };
};
/*-----  STRING UTIL FUNCTIONS  -----*/


const stripParens = s => {
  return s.replace(regexFindParensWithLeadSpaces, '$1$2');
  s.replace(regexFindParens, '$1');
};
/*-----  GETTER FUNCTIONS  -----*/


const getSyllable = (syllables, index) => {
  return (syllables[index] || ' ').replace(/^(\s*)"(.*)"$/, '$1$2');
};

const getNonSyllable = (syllables, syllableNdx, notation) => {
  let syllable = syllables[syllableNdx];

  if (/^(\s*!|[^a-záéíóúýàèìòùäëïöüÿæœǽœ́]+$|\s*\(.*\)$|\s*"\(.*\)"$)/i.test(syllable) && !regexClef.test(notation)) {
    return syllable.replace(/^(\s*)!/, '$1').replace(/^(\s*)"?\((.*?)\)"?$/, '$1$2');
  }

  return ' ';
};
/*-----  PROCESSOR FUNCTIONS  -----*/


const mapSyllable = (notation, syllables, sylNdx, isFirstSyllable) => {
  const noSyllable = regexNonSyllabicGabc.test(notation) || /^\(.*\)$/.test(notation);
  notation = stripParens(notation);
  let syllable = noSyllable ? getNonSyllable(syllables, sylNdx, notation) : getSyllable(syllables, sylNdx++);

  if (!noSyllable) {
    let nextSyllable = syllable;
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
    syllable,
    nextIndex: sylNdx,
    isFirstSyllable
  };
};

const capitalizeInitial = (syllable, nextSyllable) => {
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