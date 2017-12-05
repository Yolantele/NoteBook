function testReturnsHTML () {
  var noteListView = new NoteListView (DoubleNoteListModel)
  assert.isTrue(noteListView.returnsHTML() === '<ul><li><div>Favourite food: pesto</div></li>')
}
testReturnsHTML ()




// Doubles:
function DoubleNoteListModel () {
  'Favourite food: pesto'
}
