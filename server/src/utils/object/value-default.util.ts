import { TObjectUtilValueOrDefault, TOptionValueOrDefault } from 'src/types';

const defaultTransform = <T>(value: any) => value as T;

const defaultOption: TOptionValueOrDefault<any, any, any> = {
    piority: 'default',
    transform: defaultTransform,
};

/**
 * `DefaultOrValues` Utility Function
 *
 * This function evaluates an input `value` based on specified criteria, returning the `value` if it is valid,
 * or a fallback `def` (default) value if not. Additionally, an optional transformation can be applied to the final result.
 *
 * @template T - The type of the input value.
 * @template D - The type of the default value.
 * @template TransformType - The type returned by the transform function.
 *
 * @param {TObjectUtilValueOrDefault<T, D, TransformType>} params - An object with the following properties:
 *   - `value` (`T`): The value to be checked and potentially returned.
 *   - `def` (`D`): The default value to return if `value` is not valid.
 *   - `options` (`TOptionValueOrDefault<T, D, TransformType>`): Optional settings for customization:
 *     - `priority` (`'default' | 'value'`): Determines whether `def` should override unsupported types.
 *     - `transform` (`(value: T) => TransformType`): A function to transform `value` if it’s valid.
 *
 * @returns {TransformType | D} - Returns the transformed value if valid, otherwise the default.
 */
export const DefaultOrValues = <T, D, TransformType>({
    value,
    def,
    options = defaultOption,
}: TObjectUtilValueOrDefault<T, D, TransformType>): TransformType | D => {
    const { piority, transform = defaultTransform<TransformType> } = options;
    let resValue: T = value;

    switch (typeof value) {
        case 'string':
            resValue = value;
            break;

        case 'number':
            resValue = value;
            break;

        case 'bigint':
            resValue = value;
            break;

        case 'boolean':
            resValue = value;
            break;

        case 'undefined':
            resValue = null;
            break;

        case 'object':
            if (value === null) {
                resValue = null;
            } else if (Array.isArray(value)) {
                resValue = value.length > 0 ? value : null;
            } else {
                const keys = Object.entries(value);
                resValue = keys.length > 0 ? value : null;
            }
            break;

        default:
            if (piority === 'default') {
                resValue = null;
            }
            break;
    }

    if (!resValue) return def;

    return transform(resValue);
};
