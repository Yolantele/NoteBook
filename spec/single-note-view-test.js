function testReturnsStringHTML () {
  var singleNoteView = new SingleNoteView(new DoubleNote())
  assert.isTrue(singleNoteView.returnsStringHTML() === '<div>sample string</div>' )
}

// doubles

function DoubleNote (text) {
}

DoubleNote.prototype = {
  returnText: function () {
    return 'sample string'
  }
}

testReturnsStringHTML()
