(function (exports) {
  function NoteListView (noteList = new NoteList) {
    this.noteListModelClass = noteList.returnAllNotes()
    this.stringsArray = []
  }

  NoteListView.prototype = {
    returnsHTML: function () {
      var array = []
      this.noteListModelClass.forEach(function (note) { array.push(note.returnText()) })
      this.stringsArray = array
      return '<ul><li><div>' + this.stringsArray.join('</div></li><li><div>') + '</div></li></ul>'

    }
  }
  exports.NoteListView = NoteListView
})(this)
