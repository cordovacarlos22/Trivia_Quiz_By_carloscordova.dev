let container = document.querySelector('.questionsContainer');

let questions = localStorage.getItem('questions');
let parsedQuestions = JSON.parse(questions)
console.log(parsedQuestions[0])

const printQuestion = () => {
  parsedQuestions[0].map((item, index = 1) => {
    container.innerHTML += `
  <h1>
  ${index}. ${item.question} <br>
  ${item.incorrect_answers[0]}<br>
  ${item.correct_answer}<br>
  ${item.incorrect_answers[2]}<br>
  ${item.incorrect_answers[1]}<br>
  </h1>
  `
  });
}

printQuestion()

