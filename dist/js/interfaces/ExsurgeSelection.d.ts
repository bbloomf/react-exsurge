export interface ElementSelection {
    [position: number]: number;
    insertion?: {
        afterElementIndex?: number;
        chantLine?: number;
    };
}
export interface ExsurgeSelection {
    element?: ElementSelection;
}
