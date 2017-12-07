function testNoteModelArray () {
  var noteList = new NoteList()
  assert.isTrue(noteList.notes.length === 0)
}

testNoteModelArray()

function testCreateAndStoreNote () {
  var noteList = new NoteList(DoubleNote)
  noteList.createAndStoreNote()
  assert.isTrue(noteList.notes[0] instanceof DoubleNote)
}


function testReturnAllNotes () {
  var noteList = new NoteList(DoubleNote)
  noteList.createAndStoreNote()
  assert.isTrue(noteList.returnAllNotes() instanceof Array)
}

function testUniqueNoteId () {
  var noteList =  new NoteList()
  noteList.createAndStoreNote('string1')
  noteList.createAndStoreNote('string2')
  assert.isTrue(noteList.notes[0].id === 1)
  assert.isTrue(noteList.notes[1].id === 2)
}


// DOUBLES

function DoubleNote () {
}

testCreateAndStoreNote()
testReturnAllNotes()
testUniqueNoteId()
