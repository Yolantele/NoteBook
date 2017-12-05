(function(exports){
  var element = document.getElementById("app")
  function changeContent(text){
    element.innerHTML=text;
  }
  exports.changeContent = changeContent;
})(this)
