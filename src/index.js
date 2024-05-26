/* This line of code is selecting an HTML element with the id "categories" using the
`document.querySelector()` method and assigning it to the variable `categoriesSelectedForm`. */
let categoriesSelectedForm = document.querySelector('#categories');

/* The line `let difficultySelectedForm = document.querySelector('#difficulty');` is selecting an HTML
element with the id "difficulty" using the `document.querySelector()` method and assigning it to the
variable `difficultySelectedForm`. This code snippet likely captures the selected difficulty level
from a form input element with the id "difficulty" for further processing or interaction within the
script. */
let difficultySelectedForm = document.querySelector('#difficulty');

/* The line `let typeSelectedForm = document.querySelector('#type');` is selecting an HTML element with
the id "type" using the `document.querySelector()` method and assigning it to the variable
`typeSelectedForm`. This code snippet likely captures the selected type (such as multiple-choice,
true/false, etc.) from a form input element with the id "type" for further processing or interaction
within the script. */

let typeSelectedForm = document.querySelector('#type');

/* This line of code is selecting an HTML element with the id "start_quiz" using the
`document.querySelector()` method and assigning it to the variable `startQuiz`. */
let startQuiz = document.querySelector('#start_quiz');

/* The line `let questionsContainer = document.querySelector('#questionsContainer');` is selecting an
HTML element with the id "questionsContainer" using the `document.querySelector()` method and
assigning it to the variable `questionsContainer`. This code snippet is likely capturing a container
element in the HTML document where the fetched quiz questions will be displayed or manipulated. The
`questionsContainer` variable will hold a reference to this specific HTML element, allowing the
script to interact with it dynamically, such as updating its content with the fetched questions or
applying styles to it. */
let questionsContainer = document.querySelector('.questionsContainer');


/* The line `let categoryQuerry;` is declaring a variable named `categoryQuerry` using the `let`
keyword. However, it is not assigning any initial value to this variable. This means that
`categoryQuerry` is initially `undefined` until a value is assigned to it later in the code. */
let categoryQuerry;

/* The line `let difficultyQuerry;` is declaring a variable named `difficultyQuerry` using the `let`
keyword. However, it is not assigning any initial value to this variable. This means that
`difficultyQuerry` is initially `undefined` until a value is assigned to it later in the code. This
variable is likely intended to store the selected difficulty level from a form input element for
further processing or interaction within the script. */
let difficultyQuerry;

/* The line `let typeQuerry;` is declaring a variable named `typeQuerry` using the `let` keyword.
However, it is not assigning any initial value to this variable. This means that `typeQuerry` is
initially `undefined` until a value is assigned to it later in the code. This variable is likely
intended to store the selected type (such as multiple-choice, true/false, etc.) from a form input
element for further processing or interaction within the script. */
let typeQuerry;

/* This code snippet is adding an event listener to the `startQuiz` element for the 'click' event. When
the `startQuiz` element is clicked, the event listener callback function is executed. Inside the
callback function:
1. `e.preventDefault();` is preventing the default behavior of the click event, which is to submit a
form or follow a link.
2. `categoryQuerry = categoriesSelectedForm.value;` is assigning the value of the
`categoriesSelectedForm` element to the `categoryQuerry` variable. This likely captures the selected
category from a form input element.
3. `console.log(categoryQuerry);` is logging the value of `categoryQuerry` to the console for
debugging purposes. */

let questionsArray = [];

const handleSubmit = (e) => {
  // e.preventDefault();
  if (categoriesSelectedForm.value === "" || difficultySelectedForm.value === "" || typeSelectedForm.value === "") {
    alert('Please Filled all the required fields');
    return; // Detener la ejecución si hay campos vacíos
  }
  categoryQuerry = categoriesSelectedForm.value;
  console.log(categoryQuerry);
  difficultyQuerry = difficultySelectedForm.value;
  console.log(difficultyQuerry);
  typeQuerry = typeSelectedForm.value;
  console.log(typeQuerry);
  fectchQuestion(categoryQuerry, difficultyQuerry, typeQuerry);

}




/* The code snippet `startQuiz.addEventListener('click', (e) => {
  e.preventDefault();
  fectchQuestion(categoryQuerry);
});` is adding an event listener to the `startQuiz` element for the 'click' event. When the
`startQuiz` element is clicked, the event listener callback function is executed. Inside the
callback function, it prevents the default behavior of the click event using `e.preventDefault();`.
Then, it calls the `fectchQuestion()` function passing the `categoryQuerry` variable as an argument.
This function call likely triggers an asynchronous request to fetch questions based on the selected
category, and the retrieved data is logged to the console for further processing or debugging. */
// startQuiz.addEventListener('click', (e) => {


// });

/**
 * The function fectchQuestion asynchronously fetches 10 easy multiple-choice questions from the Open
 * Trivia Database API based on the specified category.
 * @param category - The `category` parameter in the `fectchQuestion` function is used to specify the
 * category of the trivia questions that will be fetched from the API. The API endpoint being called is
 * `https://opentdb.com/api.php`, and the `category` parameter is used to filter the questions based
 */
const fectchQuestion = async (category, difficulty, type) => {
  try {
    let response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`)
    let data = await response.json();
    
      console.log(data);
    if (data.results.length > 0) {
      questionsArray = [];
      questionsArray.push(data.results);
      console.log("data", data.results);
      console.log("array", questionsArray);
      localStorage.setItem("questions", JSON.stringify(questionsArray));
      alert('we are redirecting you to the quiz page')
      setTimeout(() => {
        window.location.href = 'quiz.html';
     },2000)
    } else {
      console.log('No results from api server please try again');
      alert('No results from api server please try again');
      return
    }
  } catch (error) {
   
    console.error(error);
  };
};


const printQuestion = () => {


  // console.log(localStorage.getItem(questions));

  // questionsArray.map((question, index) => {
  //   questionsContainer.innerHTML += `
  //   <h1>
  //   ${question.question}
  //   </h1>
  //   `
  // })

}








