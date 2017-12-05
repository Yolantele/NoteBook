(function (exports) {

  function NoteListView (noteListModel = NoteListModel) {
    this.noteListModelClass = noteListModel // *notes(text)
  }

  NoteListView.prototype.returnAllList = function () {
    return this.noteListModelClass.forEach(function(obj){ obj.returnText()}
  }

  NoteListView.prototype.returnsHTML = function () {
    return '<ul><li><div>'+ this.noteListModelClass.join('</div></li><li><div>') + '</div></li></ul>'
  }

  exports.NoteListView = NoteListView
})(this)
