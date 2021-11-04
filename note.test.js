
const Note = require("./note");
describe("note", () => {
  const note = new Note("I am new content");
  it("creates a new note with content", () => {
    expect(note.getContent()).toEqual("I am new content");
  });
});
