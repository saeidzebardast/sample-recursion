const depthFirstSearch = require('./depthFirstSearch');

describe('Depth First Search Tests', () => {
    test('Traverses a binary tree in depth-first order', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 4,
                },
                right: {
                    value: 5,
                }
            },
            right: {
                value: 3,
            }
        };

        const result = depthFirstSearch(tree);
        expect(result).toEqual([1, 2, 4, 5, 3]);
    });

    test('Returns an empty array for an empty tree', () => {
        const tree = null;
        const result = depthFirstSearch(tree);
        expect(result).toEqual([]);
    });
});