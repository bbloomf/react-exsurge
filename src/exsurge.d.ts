declare module "exsurge" {
  export interface Language {
    syllabify(text: string): Array<Array<string>>;
    findVowelSegment(
      text: string,
      startingIndex: number
    ): { found: boolean; startIndex: number; length: number };
  }
  export const language: {
    english: Language;
    latin: Language;
  };

  interface TextType {
    display: string;

    defaultSize(size: number): number;
    containedInScore(score: ChantScore): boolean;
    getFromScore(score: ChantScore): string;
  }

  interface TextTypeWithCssClass {
    cssClass: string;
  }

  interface TextTypeWithSvgElem {
    getFromSvgElem(score: any, elem: any): any;
  }

  interface TextTypeWithSvgAndCss {
    TextTypeWithSvgElem;
    TextTypeWithCssClass;
  }

  export enum TextMeasuringStrategy {
    Svg,
    Canvas,
    OpenTypeJS,
  }

  export class Annotations {
    constructor(ctxt: ChantContext, ...string);
  }

  class ChantMapping {
    source: string;
    notations: ChantNotation[];
    sourceIndex: number;
  }

  export class Gabc {
    static createMappingsFromSource(ctxt: ChantContext, gabcSource: string);
    static updateMappingsFromSource(
      ctxt: ChantContext,
      mappings: ChantMapping[],
      newGabcSource: string,
      insertionIndex?: number,
      oldInsertionIndex?: number
    );
  }

  export interface SvgTreeNode {
    name?: string;
    props?: {
      [key: string]: any;
    };
    children: SvgTreeNode[];
  }

  export class ChantScore {
    constructor(ctxt: ChantContext);

    mappings: ChantMapping[];
    lines: ChantLine[];
    notes: Note;
    titles?: Titles;
    startingClef: Clef;
    useDropCap: boolean;
    dropCap: DropCap;
    annotation: Annotation;
    compiled: boolean;
    autoColoring: boolean;
    needsLayout: boolean;
    bounds: Rect;
    forceLayout: boolean;
    pages: ChantScore[];
    updateSelection(selection: Selection);
    createSvgTree(ctxt: ChantContext, zoom?: number): SvgTreeNode;
    mergeAnnotationWithTextLeft(...annotationSpan: TextSpan);
    recreateDropCap(ctxt: ChantContext): void;
    updateNotations(ctxt: ChantContext): void;
    performLayout(ctxt: ChantContext, forceLayout: boolean): void;
    layoutChantLines(ctxt: ChantContext, width: number): void;
    paginate(height: number): void;
  }

  export const QuickSvg: {
    react: any;
  };

  export interface TextTypes {
    supertitle: TextType;
    title: TextType;
    subtitle: TextType;
    leftRight: TextType & TextTypeWithSvgAndCss;
    annotation: TextType;
    dropCap: TextType;
    al: TextType & TextTypeWithSvgAndCss;
    choralSign: TextType;
    lyric: TextType & TextTypeWithSvgElem;
    translation: TextType & TextTypeWithSvgElem;
  }

  export interface TextStyle {
    size: number;
    font: string;
    color?: string;
  }

  export interface TextStyleWithAlignment {
    alignment?: string;
  }
  export interface TextStyleWithPadding {
    padding?: number;
  }

  export type TextTypeStyles = {
    [K in keyof TextTypes]: TextStyle;
  } & {
    supertitle: TextStyleWithAlignment;
    title: TextStyleWithAlignment;
    subtitle: TextStyleWithAlignment;
    annotation: TextStyleWithPadding;
    dropCap: TextStyleWithPadding;
  };

  export class ChantContext {
    constructor(textMeasuringStrategy?: TextMeasuringStrategy);

    textStyles: TextTypeStyles;

    textMeasuringStrategy: TextMeasuringStrategy;
    lyricTextColor: string;
    setFont(font: string, size: number): any;
    rubricColor: string;
    setRubricColor: (color: string) => any;

    specialCharProperties: {
      [key: string]: string;
    };
    specialCharText?: (char: string) => string;
    textBeforeSpecialChar: string;
    textAfterSpecialChar: string;
    fontStyleDictionary: {
      [tag: string]: {
        [cssProp: string]: string;
      };
    };
    editable: boolean;
    useExtraTextOnly: boolean;

    alTextStyle: string;
    translationTextStyle: string;

    dropCapPadding: number;

    annotationPadding: number;

    minLedgerSeparation: number;
    minSpaceAboveStaff: number;
    minSpaceBelowStaff: number;
    spaceBetweenSystems: number;

    glyphPunctumWidth: number;
    glyphPunctumHeight: number;

    maxExtraSpaceInStaffIntervals: number;

    activeClef: Clef;

    neumeLineColor: string;
    staffLineColor: string;
    dividerLineColor: string;

    defaultLanguage: ExsurgeLanguage;

    pixelRatio: number;

    svgTextMeasurer?: SVGElement;

    syllableConnector: string;

    scaleDefs: boolean;

    interSyllabicMultiplier: number;

    accidentalSpaceMultiplier: number;

    interVerbalMultiplier: number;

    drawGuides: boolean;
    drawDebuggingBounds: boolean;

    currNotationIndex: number;

    condensingTolerance: number;

    autoColor: boolean;

    setFont(
      font: string,
      size: number,
      baseStyle: any,
      opentypeFontDictionary: any
    ): void;
    setRubricColor(color: string): void;
    setScaleDefs(scaleDefs: boolean);
    createStyleCss(): string;
    createStyleNode(): HTMLOrSVGElement;
    createStyleReact(): any;
    createStyle(): string;
    updateHyphenWidth(): void;
    setStaffHeight(staffHeight: number): void;
    setGlyphScaling(glyphScaling: number): void;
    calculateHeightFromStaffPosition(staffPosition: number): number;
    insertFontsInDoc(): void;
    findNextNeume(): ChantNotationElement;
    makeCanvasIfNeeded(): void;
    setCanvasSize(width: number, height: number, scale?: number): void;
  }

  export const TextTypes: TextTypes;

  export interface ElementSelection {
    indices: number[];
    insertion?: {
      afterElementIndex?: number;
      chantLine?: number;
    };
  }
  export interface Selection {
    element?: ElementSelection;
  }
}

// export const TextTypesByClass = {};
// Object.entries(TextTypes).forEach(([key, entry]) => {
//   let cssClass = (entry.cssClass = entry.cssClass || key);
//   entry.key = key;
//   TextTypesByClass[cssClass] = entry;
// });
//
// export const DefaultTrailingSpace = ctxt =>
//   ctxt.intraNeumeSpacing * ctxt.interSyllabicMultiplier;
// DefaultTrailingSpace.isDefault = true;
