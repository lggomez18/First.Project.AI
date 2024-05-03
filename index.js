function displayPoem(response){

  console.log("wheelchair accessible list generated");

  new Typewriter('#wheelchairuser', { 
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


  let instructionsInput = document.querySelector("#user-instructions");
  //1- build the API url
  let apiKey ="290724cd93ad94b31t54c30cca2o800f";

  //3 Write the prompt & context
  let context ="You are a wheelchair user person and love to explore nature in United States. Your mission is to give me a list of national parks, ordered by rating from the best to the worst, that offer accessible trails for wheelchair users in basic HTML and separate each line with a <br />. Make sure to follow user instructions. At the bottom of the list, sign with 'SheCodes AI' in bold inside a <strong> element and NOT at the beginning";
  let prompt =`User instructions: Generate a list of national parks and their websites in United States with accessible trails for wheenchair users ${instructionsInput.value}.`;

  //2- make a call to the API using axios
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
let wheelchairuserElement = document.querySelector ("#wheelchairuser")
wheelchairuserElement.display = "block";

  console.log("Generating wheelchair accessible list");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);




  axios.get(apiURL).then(displayPoem);
  //4- display the generator poem by creating a function called 'displayPoem'.
  //5- cut & paste typewriter code inside the function displayPoem


}

let wheelchairuserElement = document.querySelector("#wheelchairuser-generator-form");
wheelchairuserFormElement.addEventListener ("submit", generatePoem);