function showAnswer(response) {  
let jokeSentence= document.querySelector ("#jokeSetence");
jokeSentence.innerHTML= alert (response.data.answer);
}

let apiKey = "290724cd93ad94b31t54c30cca2o800f";
let context ="You are a creative AI assistant that invents jokes about pets";
let prompt = "Generate a short joke about pets";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);




function handleClick(){
  let jokeSentenceElement= document.querySelector ("#jokeSetence");
  jokeSentenceElement.addEventListener("click", handleClick);
  jokeSentenceElement.innerHTML= alert (response.data.answer);

}

//let buttonElement = document.querySelector("#special-button");
//buttonElement.addEventListener("click", handleClick);

//let challenge2Element = document.querySelector("#challenge-2");
//challenge2Element.innerHTML = "Matt Delac";

  //let buttonElement = document.querySelector("#jokeButton");
  //buttonElement.addEventListener("click", showAnswer);

  //typerwritter

//new Typewriter('h2', {
  //strings: 'Matt Delac',
  //autoStart: true,
  //cursor:"",
  //delay:10,
//});