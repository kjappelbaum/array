import isArray from 'is-any-array';

/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @param {number} [options.fromIndex] - Start index (inclusive) for the slice within which we look for the max
 * @param {number} [options.toIndex] - End index (exclusive) for the slice within which we look for the max
 * @return {number}
 */
export default function max(input, options = {}) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  let { fromIndex, toIndex } = options;
  if (fromIndex === undefined) {
    fromIndex = 0;
  } else if (
    (fromIndex < 0) |
    (fromIndex > input.length) |
    !Number.isInteger(fromIndex)
  ) {
    throw new Error(
      'start index must be a integer greater than 0 and smaller equal than length',
    );
  }

  if (toIndex === undefined) {
    toIndex = input.length;
  } else if (
    (toIndex <= fromIndex) |
    (toIndex > input.length) |
    !Number.isInteger(toIndex)
  ) {
    throw new Error(
      'to index must be a integer greater equal than from index and smaller equal than length',
    );
  }

  let maxValue = input[fromIndex];
  for (let i = fromIndex + 1; i < toIndex; i++) {
    if (input[i] > maxValue) maxValue = input[i];
  }
  return maxValue;
}
