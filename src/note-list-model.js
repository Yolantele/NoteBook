'use strict'

(function (exports) {
  function NoteList (note = Note) {
    this.notes = []
    this.noteClass = note
    this.idCount = 1
  }

  NoteList.prototype = {
    returnAllNotes: function () {
      return this.notes
    },
    createAndStoreNote: function (text) {
      var note = new this.noteClass(text, this.idCount)
      this.notes.push(note)
      this.idCount += 1
    }
  }
  exports.NoteList = NoteList
})(this)
