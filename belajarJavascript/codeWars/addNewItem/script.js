const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(addExtra([1, 2, 3]).length, 4);
    assert.strictEqual(addExtra([1, 2]).length, 3);
    assert.strictEqual(addExtra([]).length, 1);

    let arr = [1, 2, 3];
    assert.notStrictEqual(
      addExtra(arr),
      arr,
      "Description: ...You have to create a new list...",
    );
  });
});
