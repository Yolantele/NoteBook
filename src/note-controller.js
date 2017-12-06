(function(exports) {
  function NoteController(noteListModelParam) {
    this.noteListModel = noteListModelParam;
    this.view = null;

    NoteController.prototype.newNote = function(string) {
      this.noteListModel.createAndStoreNote(string);
    };

    NoteController.prototype.listView = function() {
      this.view = new NoteListView(this.noteListModel);
    };

    NoteController.prototype.changeElementContent = function(id) {
      document.getElementById(id).innerHTML = (this.view.returnsHTML());
    };
  }
exports.NoteController = NoteController;
})(this);

// var notecontroller = new NoteController(new NoteList())
// notecontroller.newNote("world")
// notecontroller.listView()
// notecontroller.changeElementContent('app')
