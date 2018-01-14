//This fixes sticky hover effects on mobile devices
var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
if (!touchsupport){ // browser doesn't support touch
    document.documentElement.className += " non-touch"
}

//This is the Text writer for the h4
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Front-End Developer", "Problem Solver", "Hard-Worker", "Team-Mate & Friend"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, x, fnCallback) {
    // chekc if text isn't finished yet
    if (x < (text.length)) {
      // add next character to h1
     document.querySelector("h2").innerHTML = text.substring(0, x+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, x + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(x) {
     if (typeof dataText[x] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 10000);
     }
     // check if dataText[i] exists
    if (x < dataText[x].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[x], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(x + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});