(function (exports) {

  function NoteList (note = Note ) {
    this.notes = []
    this.noteClass = note
    this.idCount = 1
  }

  NoteList.prototype = {
    returnAllNotes: function () {
      return this.notes  //returns array
    },
    createAndStoreNote: function (text) {
      var note = new this.noteClass(text, this.idCount)
      this.notes.push(note)
      this.idCount += 1
      console.log(this.notes)
    }
  }


  exports.NoteList = NoteList
})(this)
