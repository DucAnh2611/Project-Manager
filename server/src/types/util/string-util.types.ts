/** @UTIL_FORMAT_STRING */
export type TStringUtilFormatString = string;

/** @UTIL_JOIN_STRING */

export type TOptionsJoinString = object;

export type TStringUtilJoinString = {
    path: string;
    strings: string[];
    options?: TOptionsJoinString;
};
