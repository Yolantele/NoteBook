(function(exports) {

  function NoteController (noteList = new NoteList(), text) {
    this.listClass = notelist
    this.listClass.createAndStoreNote(text)
    this.view = new NoteListView(this.listClass)
  }

  NoteController.prototype = {
    changeElementContent: function (id) {
      document.getElementById(id).innerHTML = (this.view.returnsHTML())
    }
  }

  exports.NoteController = NoteController
})(this)

//
// var content = new NoteController ()
//
// content.setElement('app')
//
// content.changeContent('sample content')
//
// var notelist = new NoteList ()
//
// notelist.createAndStoreNote('Favourite drink: seltzer')
//
// var view = new NoteListView (notelist)
//
//  view.returnAllList()
//  console.log(view.returnAllList())
//
//  view.returnsHTML()
// console.log(view.returnsHTML())

// note controller method - gets HTML from the list view
// and inserts it into app element
