function testTextOfNote () {
  var note = new Note('My favourite language is JavaScript')
  assert.isTrue(note.text === 'My favourite language is JavaScript')
}

function testReturnText () {
  var note = new Note('My favourite language is JavaScript')
  assert.isTrue(note.returnText() === 'My favourite language is JavaScript')
}

testTextOfNote()
testReturnText()
