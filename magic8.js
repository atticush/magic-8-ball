/* global $ */
var pastQuestions = [];
var pastAnswers = [];
function getAnswer() {
  var question = $("#q").val();
  if (question === "") {
    $(".answer").text("Enter a question!");
  }else if(-1 != pastQuestions.indexOf(question)){
    $(".answer").text(pastAnswers[pastQuestions.indexOf(question)]);
  } else {
    var num = Math.random() * 100;
    var d = Math.round(num % 15) - 1;
    var answers = [
      "Yes",
      "It is certain",
      "Without a doubt",
      "Most likely",
      "It is possible",
      "Answer hazy, try again",
      "Unkown",
      "Better not tell you now",
      "Don't count on it",
      "It is doubtful",
      "Outlook not so good",
      "My sources tell me no",
      "Definitely not"
    ];
    var txt = answers[d];
    $(".answer").text(txt);
    pastQuestions.push(question);
    pastAnswers.push(txt);
  }
}
$(".question").submit(function(event){
  getAnswer();
  event.preventDefault();
});
