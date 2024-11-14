/** @UITL_OBJECT_VALUE_DEFAULT */

export type TObjectUtilValueOrDefault<T, D, TransformType> = {
    value: T | null | undefined;
    def: D;
    options?: TOptionValueOrDefault<T, D, TransformType>;
};

export type TOptionValueOrDetailPiority = 'value' | 'default';

export type TOptionValueOrDefault<T, D, TransformType> = {
    piority?: TOptionValueOrDetailPiority;
    transform?: (value: T) => TransformType;
};
