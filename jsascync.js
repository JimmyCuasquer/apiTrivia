// amount * 5 contador  global  con un for  


//function contador() {
//  let intervalo = setInterval(() => {
//// if(counter !== max) {
////    counter--
////     console.log(counter)
//// } else {
////   clearInterval(intervalo)
//// }
////}, 1000)
//}//

//contador()

let formQuestion = document.getElementById("triviaForm");
let container = document.getElementById("question-container");
let gameOver = document.getElementById("game");
let imagen = document.getElementById("myimageDiv");

let questions;
let q = 0;
let score = 0; 
let correctAnswer;
let incorrectAnswer;
let counter = 10;
let max = 0;
let num = [1,2,3,4,56,"Jimmy"]
let array1;
let array2;
let array3;  
const connApi = e => {
    e.preventDefault();
    let  amount = document.getElementById("amount").value;
    let  category = document.getElementById("category").value;
    let  difficulty  = document.getElementById("difficulty").value;
    let  type = document.getElementById("type").value;
    const API = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    fetchApi(API)
} 

const fetchApi = async url =>{
    try {
        const response = await fetch(url)
        const result = await response.json()
        fillQuestions(result.results)
    } catch (error) {
       console.log(error) 
    }
    
};
const fillQuestions = questionsAPI => {
    questions = questionsAPI;
    console.log(questions);
    showQuestions();
};

const showQuestions = () => {
    contador();
 
    correctAnswer = questions[q].correct_answer;
    console.log(correctAnswer)
    incorrectAnswer = questions[q].incorrect_answers;
    console.log(incorrectAnswer)
    if (questions[q].incorrect_answers.length > 1) { 
      let intervalo = setInterval(() => {
        if(counter !== max) {
           counter--
            console.log(counter)
            console.log(intervalo)
        } else {
          clearInterval(intervalo)
        }
       }, 1000)
      array3 = incorrectAnswer.concat(correctAnswer);
      console.log(array3[0])
      array3.sort(() => Math.random()-0.5);
      console.log((array3)) 
      console.log(array3[0]) 
      container.innerHTML = `
      <div class="prueba">
        <h2 class="preguntas">${questions[q].question}</h2>
        <p>${counter}</p>
        <ul>
          <li><button class="boton" onClick="handleCheckAnswer(this)">${
            array3[0]
          }</button></li>
          <li><button class="boton" onClick="handleCheckAnswer(this)"> ${
            array3[1]
          }</button></li>
          <li><button class="boton" onClick="handleCheckAnswer(this)">${
            array3[2]
          }</button></li>
          <li><button class="boton" onClick="handleCheckAnswer(this)">${
            array3[3]
          }</button></li>
  
      </ul>
      </div>
    `;
    } else if (questions[q].type !== "multiple") {
      array3 = incorrectAnswer.concat(correctAnswer);
      console.log(array3[0])
      array3.sort(() => Math.random()-0.5);
      console.log((array3)) 
      console.log(array3[0])
      container.innerHTML = `
      <div class="prueba">
        <h2 class="preguntas">${questions[q].question}</h2>
        <ul>
          <li><button class="boton" onClick="handleCheckAnswer(this)">${
            array3[0]
          }</button></li>
          <li><button class="boton" onClick="handleCheckAnswer(this)"> ${
            array3[1]
          }</button></li>
  
      </ul>
      </div>
    `;
    
  }
  }; 

  const handleCheckAnswer = button => {
    if (button.innerText === correctAnswer) {
       score++;
       button.classList.add('botones')
       button.appendChild(button)
      //innerHTML=`<button class="botones" onClick="handleCheckAnswer(this)">`;
       //container.innerHTML=`<img src="https://cdn.pixabay.com/photo/2017/03/28/01/46/check-mark-2180770_960_720.png" alt="cargando..." />`
      console.log(button);

    }else {
  
      console.log("Incorrecto");
    }
  
    if (questions.length - 1 !== q) {
      q++;
      showQuestions();
    } else {
      gameOver.innerHTML =`  
     <div>   
      <div class="content">
        <img class="md-col-12-img2" src="https://image.freepik.com/vector-gratis/juego-terminado-efecto-falla_225004-661.jpg"/>
        <div class="puntuacion"> 
        <h3>Acertaste: ${score} preguntas de ${questions.length}</h3>
        
        <input  class="botons" type="button" value="JUGAR DE NUEVO" onclick="javascript:window.location.reload();"/>
        </div>
    </div>
      ` ;
    }
  };
function contador() {
 let intervalo = setInterval(() => {
 if(counter !== max) {
    counter--
     console.log(counter)
     console.log(intervalo)
 } else {
   clearInterval(intervalo)
 }
}, 1000)
}

//contador()

formQuestion.onsubmit = connApi;
console.log("hola")

