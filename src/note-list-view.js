(function (exports) {

  function NoteListView (noteListModel = NoteListModel) {
    this.noteListModelClass = noteListModel
  }

  NoteListView.prototype.returnsHTML = function (text) {
    return '<ul><li><div>'+this.noteListModelClass(text)+'</div></li></ul>'
  }

  exports.NoteListView = NoteListView
})(this)
