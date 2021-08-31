let formQuestion = document.getElementById('triviaForm');
let  pregunta = document.getElementById('form-questions');
let buttonQuestion = document.getElementById("next")

let quuestions;
let q =0;
let score =0;

const createApiUrl = e =>{
  e.preventDefault(); // para que no se actualice la consola y pagina
  let  amount = document.getElementById("amount").value;
  let  category = document.getElementById("category").value;
  let  difficulty  = document.getElementById("difficulty").value;
  let  type = document.getElementById("type").value;
  const API = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  //const API = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  fetchAPI (API);
};

const fetchAPI = url => {
  fetch(url)
  .then(response => response.json())// function(respuestaDeFetchQueEsUnaPromesa){return respuestaDeFetchQueEsUnaPromesa.json() ------> respuestaDeFetchQueEsUnaPromesa pero convertida en objeto}
  .then(resultado => fillQuestions(resultado.results))
  .catch(error => console.log(error));
};

const fillQuestions = questionAPI => {
  questionAPI.forEach(element => {
    let pre = element.question;
    let correctAnswer = element.correct_answer; 
    let incorrectAnswer = element.incorrect_answers;
    console.log(pre)
    console.log(element.correct_answer)
    console.log(element.incorrect_answers)
    pregunta.innerHTML += `<h2>${pre}</h2>`;
    incorrectAnswer.forEach((elemento, i) => {
        console.log(elemento ,i)
    });
      
   pregunta.innerHTML += `<div>${correctAnswer}</div>`;
   pregunta.innerHTML += `<div>a${incorrectAnswer}</div>`;
  
    //console.log(pregunta.innerHTML)
    
  });

  console.log(questionAPI);
  quuestions = questionAPI;
}
const showQuestions = () => {
  console.log(quuestions[q].incorrect_answers);
  quuestions.forEach(element => {
    let pre = element.question;
    let correctAnswer = element.correct_answer; 
    let incorrectAnswer = element.incorrect_answers;
    console.log(pre)
    console.log(element.correct_answer)
    console.log(element.incorrect_answers)
    //let h1 = document.createElement("p")
    pregunta.innerHTML += `<h2>${pre}</h2>`;
    pregunta.innerHTML += `<span>${correctAnswer}</span>`
    pregunta.innerHTML += `<span>${incorrectAnswer}</span>`
    //pregunta.appendChild(pre)
    //console.log(pregunta.innerHTML)
    
  });
  //   questions.forEach(quest  ion => {
  //     console.log(`Pregunta: ${question.question}`);
  //     console.log(`Respuesta correcta: ${question.correct_answer}`);
  //     console.log(`Respuestas incorrectas: ${question.incorrect_answers}`);
  //     console.log(`Dificultad: ${question.difficulty}`);
  //     console.log(`Categoría: ${question.category}`);
  //   });
};

const handleNextQuestion = (e) => {
  e.innerHTML ="";
  e.preventDefault();
  q++;
  showQuestions();
};

formQuestion.onsubmit = createApiUrl;
buttonQuestion.onclick = handleNextQuestion;
