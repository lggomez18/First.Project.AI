function displayPoem(response){
  new Typewriter('#poem', { 
    //let poemElement = document.querySelector ("#poem");
    strings: ["La tombe dit..."],
    //poemElement.innerHTML = "La tombe dit...";
    autoStart: true,
    delay:1,
    cursor:"",
  });
}


function generatePoem (event){
  event.preventDefault();

  //1- build the API url
  let apiKey="290724cd93ad94b31t54c30cca2o800f";

  //3 Write the prompt & context
  let prompt="";
  let context="";

  //2- make a call to the API using axios
  let apiURL = "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}";
  
  axios.get(apiURL).then(displayPoem);
  //4- display the generator poem by creating a function called 'displayPoem'.
  //5- cut & paste typewriter code inside the function displayPoem


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener ("submit", generatePoem);