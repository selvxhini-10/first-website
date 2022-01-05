function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  var pictures = [
    "https://cdn.glitch.me/6144e261-16e0-45f5-b443-e676a0aa65b8%2Fsad.jpg?v=1639350138610",
    "https://cdn.glitch.me/6144e261-16e0-45f5-b443-e676a0aa65b8%2Fhappy.jpg?v=1639350166031"];
  var messages = ["Great job, you got it right!", "That was utterly disgraceful :("];

  if (question1 == "Savannah") {
    correct++;
  }

  if (question2 == "Hippopotami") {
    correct++;
  }
  
if (question3 == "Brown") {
  correct++;
}
  if (correct < 1) {
    document.getElementById("message").innerHTML = messages[1];
    document.getElementById("picture").src = pictures[0];
  }
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
}
