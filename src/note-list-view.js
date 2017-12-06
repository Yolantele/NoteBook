(function (exports) {
  function NoteListView (noteList = new NoteList()) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTML = function() {
    console.log(this.noteList)
    console.log(this.noteList.notes)
  var noteListMap = this.noteList.notes.map(function(listItem) {
    return ("<li><div>" + listItem.text.slice(0, 20) + "</div></li>");
  });
  return ("<ul>" + noteListMap.join("") + "</ul>");
  };

  exports.NoteListView = NoteListView
})(this)
