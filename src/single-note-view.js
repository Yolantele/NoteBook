'use strict'

(function (exports) {
  function SingleNoteView (note = new Note()) {
    this.note = note
  }

  SingleNoteView.prototype = {
    returnsStringHTML: function () {
      return '<div>' + this.note.returnText() + '</div>'
    }
  }
  exports.SingleNoteView = SingleNoteView
})(this)
