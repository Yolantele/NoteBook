(function(exports){

  function NoteController () {
    this.element = ''
  };
  NoteController.prototype.setElement = function (id) {
    this.element = document.getElementById(id)
  }

  NoteController.prototype.changeContent = function (text) {
    this.element.innerHTML = text
  }

  exports.NoteController = NoteController
})(this)

var content = new NoteController ()

content.setElement('app')

content.changeContent('Majd')

var noteList = new NoteList();
noteList.createAndStoreNote("Favourite drink: seltzer")
console.log(noteList.notes);
// var noteView = new NoteListView(noteList);
// console.log(noteView.returnsHTML)
