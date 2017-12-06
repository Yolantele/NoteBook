(function (exports) {
  function NoteListView (noteList = new NoteList) {
    this.noteListModelClass = noteList //is an array
    this.stringsArray = []
  }

  NoteListView.prototype = {
    returnsHTML: function () {
      console.log(this.noteListModelClass)
      var array = this.noteListModelClass.forEach(function (note) {
        return note.text  // returns string
      })
      this.stringsArray = array
      console.log('test 2')

      console.log('test 3')

      console.log(this.stringsArray)
      //
      // var html =  '<ul><li><div>' + this.stringsArray.join('</div></li><li><div>') + '</div></li></ul>'
      //
      // console.log(html)
      // return html
    }
  }
  exports.NoteListView = NoteListView
})(this)
