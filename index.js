function showJoke(response) {  
alert (response.data.answer);


let apiKey = "290724cd93ad94b31t54c30cca2o800f";
let context ="You are a creative AI assistant that invents jokes about pets";
let prompt = "Generate a short joke about pets";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showJoke);
}


function tellJoke (event){
  
}


  let buttonElement= document.querySelector ("#jokeButton");
  buttonElement.addEventListener("click", tellJoke);


  //typerwritter

//new Typewriter('h2', {
  //strings: 'Matt Delac',
  //autoStart: true,
  //cursor:"",
  //delay:10,
//});