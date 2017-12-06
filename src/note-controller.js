(function(exports) {

  function NoteController (noteList = new NoteList) {
    this.element = ''
    this.listClass = notelist
  }

  NoteController.prototype = {
    setElement: function (id) {
      this.element = document.getElementById(id)
    },
    changeContent: function (text) {
      this.element.innerHTML = text
    }
  }

  exports.NoteController = NoteController
})(this)


var content = new NoteController ()

content.setElement('app')

content.changeContent('sample content')

var notelist = new NoteList ()

notelist.createAndStoreNote('Favourite drink: seltzer')

var view = new NoteListView (notelist)

 view.returnAllList()
 view.returnsHTML()
