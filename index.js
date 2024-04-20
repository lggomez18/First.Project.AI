function showAnswer(response) {
    alert(response.data.answer);

}

let apiKey = "290724cd93ad94b31t54c30cca2o800f";
let context ="Provide specific information, such as name, birth location and year";
let prompt = "Who was the first female to develop AI?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("processing");
axios.get(apiUrl).then(showAnswer)