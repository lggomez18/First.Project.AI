function displayPoem(response){

  console.log("poem generated");

  new Typewriter('#poem', { 
    //let poemElement = document.querySelector ("#poem");
    strings:response.data.answer,
    //poemElement.innerHTML = "La tombe dit...";
    autoStart: true,
    delay:1,
    cursor:"",
  });
}


function generatePoem (event){
  event.preventDefault();

  let instructionsInput= document.querySelector("#user-instructions");
  //1- build the API url
  let apiKey ="290724cd93ad94b31t54c30cca2o800f";

  //3 Write the prompt & context
  let context ="You are a romantic poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow user instructions.";
  let prompt =`User instructions: Generate a French poem about ${user-instructions.value}`;

  //2- make a call to the API using axios
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);




  axios.get(apiURL).then(displayPoem);
  //4- display the generator poem by creating a function called 'displayPoem'.
  //5- cut & paste typewriter code inside the function displayPoem


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener ("submit", generatePoem);