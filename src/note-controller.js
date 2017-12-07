'use strict'

(function (exports) {
  function NoteController (noteListModelParam) {
    this.noteListModel = noteListModelParam
    this.view = null
  }

  NoteController.prototype = {
    newNote: function (string) {
      this.noteListModel.createAndStoreNote(string)
    },
    listView: function () {
      this.view = new NoteListView(this.noteListModel)
    },
    changeElementContent: function (id) {
      document.getElementById(id).innerHTML = (this.view.returnsHTML())
    }
  }
exports.NoteController = NoteController
})(this)
