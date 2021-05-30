/**
 * Returns an array with arrays of the given size.
 *
 * @param array {Array} Array to group
 * @param divisor {Integer} Number of expected arrays
 */

const groupArrayElements = (array, divisor) => {
    if (!Array.isArray(array) || !Number.isInteger(divisor)) {
        return [];
    }
 
    if (divisor <= 1) {
        return [array];
    }

    const newArray = [];
    const arrayToTransform = [...array];
    const groupedArrayLength = Math.ceil(arrayToTransform.length / divisor);

    while (arrayToTransform.length) {
        newArray.push(arrayToTransform.splice(0, groupedArrayLength));
    }

    return newArray;
};

module.exports = {
    groupArrayElements
};
