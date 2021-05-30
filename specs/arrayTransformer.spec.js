const assert = require("assert");
const { groupArrayElements } = require("../main/arrayTransformer");

describe("groupArrayElements", () => {
    let initialArray;
    let divisor;

    it("should return an array of the initial array when divisor is a negative number", () => {
        // arrange
        initialArray = [1, 2, 3, 4, 5, 6, 7];
        divisor = -1;

        // act
        const result = groupArrayElements(initialArray, divisor);

        // assert
        assert.deepStrictEqual(result, [initialArray]);
    });

    it("should return an array of the initial array when divisor is equal to 0", () => {
        // arrange
        initialArray = [1, 2, 3, 4, 5, 6, 7];
        divisor = 0;

        // act
        const result = groupArrayElements(initialArray, divisor);

        // assert
        assert.deepStrictEqual(result, [initialArray]);
    });

    it("should return an array of the initial array when divisor is equal to 1", () => {
        // arrange
        initialArray = [1, 2, 3, 4, 5, 6, 7];
        divisor = 1;

        // act
        const result = groupArrayElements(initialArray, divisor);

        // assert
        assert.deepStrictEqual(result, [initialArray]);
    });

    it("should return an array of equal length arrays when the initial array length can be divided by divisor", () => {
        // arrange
        initialArray = [1, 2, 3, 4, 5, 6];
        divisor = 2;
        const expected = [[1, 2, 3], [4, 5, 6]];

        // act
        const result = groupArrayElements(initialArray, divisor);

        // assert
        assert.deepStrictEqual(result, expected);
    });

    it("should return an array divided by the divisor plus the remainder", () => {
        // arrange
        initialArray = [1, 2, 3, 4, 5, 6, 7];
        divisor = 2;
        const expected = [[1, 2, 3, 4], [ 5, 6, 7]];
        
        // act
        const result = groupArrayElements(initialArray, divisor);

        // assert
        assert.deepStrictEqual(result, expected);
    });

    it("should return an empty array if divisor is not an Integer", () => {
        // arrange
        initialArray = [1, 2, 3, 4, 5, 6, 7];
        divisor = "2";

        // act
        const result = groupArrayElements(initialArray, divisor);

        // assert
        assert.deepStrictEqual(result, []);
    });

    it("should return an empty array if array parameter is not of type Array", () => {
        // arrange
        initialArray = undefined;
        divisor = 2;

        // act
        const result = groupArrayElements(initialArray, divisor);

        // assert
        assert.deepStrictEqual(result, []);
    });
});