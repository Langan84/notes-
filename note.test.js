
const Note = require("../notes");
const note = new Note("new content");

describe("Note", () => {

  it("instantiates a new note", () => {
  expect(this.note()).toBeInstanceOf(Note)
  });
});
