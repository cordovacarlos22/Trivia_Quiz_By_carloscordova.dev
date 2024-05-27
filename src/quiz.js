/* The line `let container = document.querySelector('#quizContainer');` is selecting the HTML element
with the id "quizContainer" from the document and storing it in the variable `container`. This
element is likely the container where the quiz questions and answers will be displayed on the
webpage. */
let container = document.querySelector('#quizContainer');
/* The line `let scoreContainer = document.querySelector('#scoreContainer');` is selecting the HTML
element with the id "scoreContainer" from the document and storing it in the variable
`scoreContainer`. This element is likely the container where the quiz score will be displayed on the
webpage. */
let scoreContainer = document.querySelector('#scoreContainer');
/* The line `let nextButton = document.querySelector('#nextQuestion');` is selecting the HTML element
with the id "nextQuestion" from the document and storing it in the variable `nextButton`. This
element is likely the button that allows the user to move to the next question in the quiz. */
let nextButton = document.querySelector('#nextQuestion');
let restartButton = document.querySelector('#restartQuiz');
let questions = localStorage.getItem('questions');
let parsedQuestions = JSON.parse(questions);
let currentQuestionIndex = 0;
let score = 0;



// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



const printQuestion = (index) => {
  let question = parsedQuestions[0][index]; // Accede a la pregunta en la estructura [0][index]

  // Combina las respuestas incorrectas y correctas
  let answers = [...question.incorrect_answers, question.correct_answer];

  // Baraja las respuestas
  shuffleArray(answers);

  // Construye el HTML para la pregunta y sus respuestas
  container.innerHTML = `
        <div class="m-8 p-8  text-white">
        <h1 class="">${index + 1}. ${question.question}</h1>
        <ul>
        ${answers.map(answer =>
    `<li tabindex="1" class="answer ">${answer}</li>`)
      .join('')}
        </ul>
        </div>
    `;

  // Deshabilita el botón de siguiente pregunta hasta que se seleccione una respuesta
  nextButton.disabled = true;

  // Agrega evento de click a cada respuesta
  document.querySelectorAll('.answer').forEach(answerElement => {
    answerElement.addEventListener('click', () => {
      // Validar si la respuesta es correcta
      if (answerElement.textContent === question.correct_answer) {
        score++; // Incrementa el puntaje si es correcta
      }
      // Habilita el botón de siguiente pregunta
      nextButton.disabled = false;
    });
  });
}

printQuestion(currentQuestionIndex);

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < parsedQuestions[0].length) {
    printQuestion(currentQuestionIndex);
  } else {
    container.innerHTML = `
     <div class="w-2/4 text-white m-8 p-8 text-2xl text-bolder ">
      <p >Has completado el quiz.</p>
      <p>Tu puntaje es: ${score} de ${parsedQuestions[0].length}
     </div>
    `;
    // scoreContainer.innerHTML = `<p>Your Score is : ${score} out of  ${parsedQuestions[0].length}</p>`;
    nextButton.style.display = 'none';
    restartButton.style.display = 'block'; // Muestra el botón de reinicio
  }
});

restartButton.addEventListener('click', () => {
  // Borra el localStorage
  localStorage.removeItem('questions');
  // Redirige a index.html
  window.location.href = 'index.html';
});

function selectAnswer(element) {
  // Remover la clase 'selected' de todas las opciones
  document.querySelectorAll('.answer-list li').forEach(item => {
    item.classList.remove('selected');
  });

  // Agregar la clase 'selected' a la opción seleccionada
  element.classList.add('selected');
}
