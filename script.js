const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setnextquestion()
})

function startGame() {
  questionContainerElement.classList.remove('hide')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setnextquestion()

}

function setnextquestion() {
  resetstate()
  showquestion(shuffledQuestions[currentQuestionIndex])

}
function showquestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    let button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', (e) => selectanswer(e));
    answerButtonsElement.appendChild(button);
  });
}

function resetstate() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

  }

}
function selectanswer(e) {
  const selectedbtn = e.target
  const correct = selectedbtn.dataset.correct
  setstatusclass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach((btn) => {
    setstatusclass(btn, btn.dataset.correct)
    btn.style.pointerEvents = 'none'

  })



  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
  }



}

function setstatusclass(element, correct) {
  clearstatus(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }

}
function clearstatus(element) {
  element.classList.remove('wrong')
  element.classList.remove('correct')

}





const questions = [
  {
    question: "What does DOM stand for in web development?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Document Oriented Model", correct: false },
      { text: "Developer's Object Manipulation", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare variables in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "string", correct: false },
      { text: "dec", correct: false }
    ]
  },
  {
    question: "What does JSON stand for?",
    answers: [
      { text: "JavaScript Object Notation", correct: true },
      { text: "JavaScript Oriented Node", correct: false },
      { text: "JavaScript Oriented Notation", correct: false },
      { text: "JavaScript Object Node", correct: false }
    ]
  },
  {
    question: "Which function is used to parse a string to JSON in JavaScript?",
    answers: [
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.objectify()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.decode()", correct: false }
    ]
  },
  {
    question: "What does the '=== 'operator do in JavaScript?",
    answers: [
      { text: "Compares two values for equality, allowing type coercion", correct: false },
      { text: "Compares two values for equality, without type coercion", correct: true },
      { text: "Assigns a value to a variable", correct: false },
      { text: "Checks for greater than or equal to", correct: false }
    ]
  }
];
