
function generatePoem (event){
  event.preventDefault();

//let poemElement = document.querySelector ("#poem");

new Typewriter('#poem', {  // the #poem indicates where is the typewriter going to appear, document.querySelector basically
  strings: ["La tombe dit..."], // it's de inner HTML part that will show in your page.
  autoStart: true,
});

//poemElement.innerHTML = "La tombe dit...";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener ("submit", generatePoem);