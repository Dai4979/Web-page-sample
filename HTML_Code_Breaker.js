var n = 0;
var table = $("table td")
var answerLog = []
var code = []
$(".code button").on("click", function(){
  $(this).text(n);
  n++;
  if (n === 10) {
    n = 0
  }
});

// $(".code button").on("click", function(){
//   var n = $(this).text();
//   if (n == "?") {
//     $(this).text(0)
//   }
// });


//Get guess
//Generate number
function codeGenerator(){
  var num = [0,1,2,3,4,5,6,7,8,9]
  //shuffle elements in array
  function shuffle(num) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
  code = [num[0], num[1],num[2],num[3]]
  return code
}

//Generate clues
function checkState(code){
  var match = 0;
  var hit = 0;
  var miss = 0;
  for (var index = 0; index < 4; index++) {
    if ($(table[index]).text() == code[index]) {
      match += 1;
    }
    else if ( $(table[index]).text() in code) {
      hit += 1;
    }
    else {
      miss += 1;
    }
  }
  answerLog.append("Match: " + match + "Hit: "+ hit +"Miss: " + miss)

  for (var i = answerLog.length-1; i <= 0 ; i--) {
    array[i]
  }
}

//Run game logic
