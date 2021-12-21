//initialization of counters
var questionNumber = 0;
var totalQuestions = 5;
var score = 0;

//array of questions
var q = ["Who is the most famous Elf of all?","What is the first rule of ELF code?","What is the main job that elves are responsible for?","What was the name of the Head Elf in the movie The Santa Clause?","What is a distinctive characteristic of all Elves?"];

//answer text arrays
var a1 = ["Charles","Don't question the big guy","Making toys for the children","Alabaster"," Black hair"];
var a2 = ["Buddy","The customer is always right","Keeping the North Pole hidden from visitors","Curtis","Pointy toes"];
var a3 = ["Frank","Treat every day like Christmas","Making sure Santa stays awake on Christmas Eve","Bernard","Red nose"];
var a4 = ["Gimbel","Don't eat the chocolate","Getting all the best Black Friday deals","Charlie","Pointy ears"];

//array of correct answer indexes
var correctAnswers = [2, 3, 1, 3, 4];

//initial population of questions and answers
document.getElementById("question").innerHTML = q[questionNumber];
document.getElementById("ans-text-1").innerHTML = a1[questionNumber];
document.getElementById("ans-text-2").innerHTML = a2[questionNumber];
document.getElementById("ans-text-3").innerHTML = a3[questionNumber];
document.getElementById("ans-text-4").innerHTML = a4[questionNumber];

//initial population of stats
document.getElementById('stats1').innerHTML = "Question: " + (questionNumber+1) + "/" + totalQuestions;
document.getElementById('stats2').innerHTML = "Score: " + score + "/" + questionNumber;

//check if answer is correct, update score, advance question number
function checkAnswer(answerSelection) {
  //correct answer
  if (answerSelection == correctAnswers[questionNumber]) {
    alert("Correct!");
    score++;
  }
//wrong answer
  else {
    alert("Wrong!");
  }

  //check if last question
  if (questionNumber == 4) {
    if (score/totalQuestions*100 > 79) {
    //show success, link to hint
    document.getElementById('quiz-container').innerHTML = "";
    document.getElementById('quiz-container').insertAdjacentHTML('afterbegin', '<p id="quiz-score"></p><p id="result-icon"></p><p id="quiz-message"></p>');
    document.getElementById('quiz-score').innerHTML = 'Your score:<br>' + score/totalQuestions*100 + "%";
    document.getElementById('quiz-message').innerHTML = 'Congratulations! Here&#39;s a hint as to where you can find your gift!</p><button type="button" class="btn btn-lg btn-outline-dark yes-no-btn" name="button" onclick="hint()">Hint</button>';
    document.getElementById('result-icon').innerHTML = '<i class="fas fa-gift"></i>';
    console.log("congrats");
  } else {
    //show failure, allow retry
    document.getElementById('quiz-container').innerHTML = "";
    document.getElementById('quiz-container').insertAdjacentHTML('afterbegin', '<p id="quiz-score"></p><p id="result-icon"></p><p id="quiz-message"></p>');
    document.getElementById('quiz-score').innerHTML = 'Your score:<br>' + score/totalQuestions*100 + "%";
    document.getElementById('quiz-message').innerHTML = 'You suck! <br> <button type="button" class="btn btn-lg btn-outline-dark yes-no-btn" name="button" onclick="window.location.reload()">Retry</button>';
    document.getElementById('result-icon').innerHTML = '<i class="far fa-times-circle"></i>';
    console.log("boo");
  }
  }

  //check complete, update question counter and log status
  console.log("Score is " + score + " and question number is " + questionNumber);
  questionNumber++;

  //update questions
  document.getElementById("question").innerHTML = q[questionNumber];
  document.getElementById("ans-text-1").innerHTML = a1[questionNumber];
  document.getElementById("ans-text-2").innerHTML = a2[questionNumber];
  document.getElementById("ans-text-3").innerHTML = a3[questionNumber];
  document.getElementById("ans-text-4").innerHTML = a4[questionNumber];

  //clear radio buttons
  document.getElementById('ans-btn-1').checked = false;
  document.getElementById('ans-btn-2').checked = false;
  document.getElementById('ans-btn-3').checked = false;
  document.getElementById('ans-btn-4').checked = false;

  //update stats
  document.getElementById('stats1').innerHTML = "Question: " + (questionNumber+1) + "/" + totalQuestions;
  document.getElementById('stats2').innerHTML = "Score: " + score + "/" + questionNumber;
}



//when submit is clicked, checkAnswer()
function submitAnswer() {
  if(document.getElementById('ans-btn-1').checked == true) {
    answerSelection = 1;
  } else if(document.getElementById('ans-btn-2').checked == true) {
    answerSelection = 2;
  } else if(document.getElementById('ans-btn-3').checked == true) {
    answerSelection = 3;
  } else if(document.getElementById('ans-btn-4').checked == true) {
    answerSelection = 4;
  } else {
    //no answer selected
    alert("Please select an answer");
    return 0;
  }
  checkAnswer(answerSelection);
  return 0;
}


function hint() {
  document.getElementById('quiz-container').innerHTML = "";
  document.getElementById('quiz-container').insertAdjacentHTML('afterbegin', '<p class="quiz-result">If Santa were to go on vacation, he would use his magic bag, but you humans would use a ________.</p>');
}
