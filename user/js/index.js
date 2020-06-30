;(function () {
  document.onmousedown = function mdClick(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0]
    if (e.button == 2 || e.button == 3) {
      alert('八戒，你又调皮了')
    }
  }
  document.oncontextmenu = new Function('return false;')
  document.onkeydown = document.onkeyup = document.onkeypress = function (
    event
  ) {
    var e = event || window.event || arguments.callee.caller.arguments[0]

    if (e && e.keyCode == 123) {
      alert('八戒，你又调皮了')
      e.returnValue = false
      return false
    }
  }
})
