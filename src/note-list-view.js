'use strict'

(function (exports) {
  function NoteListView (noteList = new NoteList()) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function () {
    var noteListMap = this.noteList.notes.map(function (listItem) {
      return ('<li><div>' + listItem.text.slice(0, 20) + '</div></li>')
    })
    return ('<ul>' + noteListMap.join('') + '</ul>')
  }

  makeUrlChangeShowNoteForCurrentPage()

  function makeUrlChangeShowNoteForCurrentPage () {
    window.addEventListener('hashchange', showNoteForCurrentPage)
  }
  function showNoteForCurrentPage () {
    showNote(getNoteFromUrl(window.location))
  }
  function getNoteFromUrl (location) {
    return location.hash.split('#')[1]
  }
  function showNote (Note) {
    document
      .getElementById('note')
      .innerHTML = Note
  }

  exports.NoteListView = NoteListView
})(this)
