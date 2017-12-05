function testReturnsHTML () {
  var noteListView = new NoteListView (DoubleNoteListModel([""]))
  assert.isTrue(noteListView.returnsHTML() === '<ul><li><div></div></li></ul>')
}
// testReturnsHTML ()

function testReturnsHTMLNote () {
  var noteListView = new NoteListView (DoubleNoteListModel(['Favourite food: pesto']))
  assert.isTrue(noteListView.returnsHTML() === '<ul><li><div>Favourite food: pesto</div></li></ul>')
}
// testReturnsHTMLNote ()

function testReturnsHTMLMultipleNotes () {
  var noteListView = new NoteListView (DoubleNoteListModel(['Favourite food: pesto', 'Favourite drink: seltzer']))
  assert.isTrue(noteListView.returnsHTML() === '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>')
}
// testReturnsHTMLMultipleNotes ()


// Doubles:
function DoubleNoteListModel (text) {
  return text
}
