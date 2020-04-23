/**
 * ensure that an array has the same reference as last time, whenever its contents are the same as last time
 * JSON.stringify is currently used to compare the values; this could be improved, but I'm mostly using it for string arrays,
 * so I don't think it would improve performance very much to use a more efficient method of checking equality
 * @param value the array
 */
declare const useArray: <T>(value: T[]) => T[];
export default useArray;
