/* This line of code is selecting an HTML element with the id "categories" using the
`document.querySelector()` method and assigning it to the variable `categoriesSelectedForm`. */
let categoriesSelectedForm = document.querySelector('#categories');
/* This line of code is selecting an HTML element with the id "start_quiz" using the
`document.querySelector()` method and assigning it to the variable `startQuiz`. */
let startQuiz = document.querySelector('#start_quiz');


/* The line `let categoryQuerry;` is declaring a variable named `categoryQuerry` using the `let`
keyword. However, it is not assigning any initial value to this variable. This means that
`categoryQuerry` is initially `undefined` until a value is assigned to it later in the code. */
let categoryQuerry;

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
startQuiz.addEventListener('click', (e) => {
  e.preventDefault();
  categoryQuerry = categoriesSelectedForm.value;
  console.log(categoryQuerry);
});

/* The code snippet `startQuiz.addEventListener('click', (e) => {
  e.preventDefault();
  fectchQuestion(categoryQuerry);
});` is adding an event listener to the `startQuiz` element for the 'click' event. When the
`startQuiz` element is clicked, the event listener callback function is executed. Inside the
callback function, it prevents the default behavior of the click event using `e.preventDefault();`.
Then, it calls the `fectchQuestion()` function passing the `categoryQuerry` variable as an argument.
This function call likely triggers an asynchronous request to fetch questions based on the selected
category, and the retrieved data is logged to the console for further processing or debugging. */
startQuiz.addEventListener('click', (e) => {
  e.preventDefault();
  fectchQuestion(categoryQuerry);
});

/**
 * The function fectchQuestion asynchronously fetches 10 easy multiple-choice questions from the Open
 * Trivia Database API based on the specified category.
 * @param category - The `category` parameter in the `fectchQuestion` function is used to specify the
 * category of the trivia questions that will be fetched from the API. The API endpoint being called is
 * `https://opentdb.com/api.php`, and the `category` parameter is used to filter the questions based
 */
const fectchQuestion = async (category) => {
 let response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`)
  let data = await response.json();
  console.log(data);

};



