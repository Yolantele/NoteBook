function testReturnsHTML () {
  var noteListView = new NoteListView
  noteListView.stringsArray = [""]
  assert.isTrue(noteListView.returnsHTML() === '<ul><li><div></div></li></ul>')
}

function testReturnsHTMLNote () {
  var noteListView = new NoteListView(['Favourite food: pesto'])
  // noteListView.stringsArray = ['Favourite food: pesto']
  assert.isTrue(noteListView.returnsHTML() === '<ul><li><div>Favourite food: pesto</div></li></ul>')
}


function testReturnsHTMLMultipleNotes () {
  var noteListView = new NoteListView(['Favourite food: pesto', 'Favourite drink: seltzer'])
  // noteListView.stringsArray = ['Favourite food: pesto', 'Favourite drink: seltzer']
  assert.isTrue(noteListView.returnsHTML() === '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>')
}

  // testReturnsHTML ()
  testReturnsHTMLNote ()
  // testReturnsHTMLMultipleNotes ()
