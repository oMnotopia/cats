const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe("#breedDetails", () => {
  it("Returns breed details for the bombay breed", () => {
    const expectedOutput = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    const bombay = breedDetails('Bombay');
    assert.equal(bombay, expectedOutput);
  });

  it("Returns breed details for the balinese breed", () => {
    const expectedOutput = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
    const balinese = breedDetails('Balinese');
    assert.equal(balinese, expectedOutput);
  });

  it("Returns undefined when no argument is passed into the function", () => {
    assert.isUndefined(breedDetails());
  });
});