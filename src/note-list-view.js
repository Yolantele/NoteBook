(function (exports) {

  function NoteListView (noteListModel = NoteListModel) {
    this.noteListModelClass = noteListModel
  }

  NoteListView.prototype.returnsHTML = function () {
  }

  exports.NoteListView = NoteListView
})(this)
