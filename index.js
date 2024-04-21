function showAnswer(response) {

  let buttonElement = document.querySelector("#jokeButton");
  buttonElement.addEventListener("click", showAnswer);
    
  //alert(response.data.answer);


}

let apiKey = "290724cd93ad94b31t54c30cca2o800f";
let context ="Jokes about pets";
let prompt = "Tell me one different short joke about cats";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("processing");
axios.get(apiUrl).then(showAnswer);




//function handleClick(){

   // buttonElement.setAttribute = ("disabled", "disabled");
    //buttonElement.style.background="green";

//}

//let buttonElement = document.querySelector("#special-button");
//buttonElement.addEventListener("click", handleClick);

//setAttributes
//element.styles.marginRight='10px';
//element.classList.remove("highlight");


let challenge2Element = document.querySelector("#challenge-2");
challenge2Element.innerHTML = "Matt Delac";

//typerwritter

new Typewriter('h2', {
  strings: 'Matt Delac',
  autoStart: true,
  cursor:"",
  delay:10,
});