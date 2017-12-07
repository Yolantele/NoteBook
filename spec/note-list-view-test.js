function testNoteListViewCanReturnHTMLString () {
  var noteList = new DoubleNoteList()
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div>stringy</div></li></ul>')
}

function testNoteListViewCanHandleNoNotes () {
  var noteListView = new NoteListView()
  assert.isTrue(noteListView.returnHTML() === '<ul></ul>')
}

function testNoteListViewCanHandleManyNotes () {
  var noteList = new DoubleNoteList2()
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div>stringy</div></li><li><div>stringy</div></li></ul>');
}

function testNoteListViewShowsFirst20Characters () {
  var noteList = new DoubleNoteList3()
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div>aaaaaaaaaaaaaaaaaaaa</div></li></ul>')
}

// doubles:

function DoubleNoteList () {
  this.notes = [{text: 'stringy'}]
}
function DoubleNoteList2 () {
  this.notes = [{text: 'stringy'}, {text: 'stringy'}]
}
function DoubleNoteList3 () {
  this.notes = [{text: 'aaaaaaaaaaaaaaaaaaaaxxxxxxxx'}]
}

testNoteListViewCanReturnHTMLString()
testNoteListViewCanHandleNoNotes()
testNoteListViewCanHandleManyNotes()
testNoteListViewShowsFirst20Characters()
