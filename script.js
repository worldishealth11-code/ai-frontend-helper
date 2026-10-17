// Move to the assistant form when the button is clicked
function goToAssistant() {
    document.getElementById( "assistant").scrollIntoView({
        behavior: "smooth"
    });
}
//get the form and listen for submission
const helperForm = document.getElementById("helperForm");
if (helperForm) {
helperForm.addEventListener("submit",function(event) {

event.preventDefault();

const name = document.getElementById("userName").value.trim();
const question = document.getElementById("userQuestion") .value.trim();
const result = document.getElementById("result");
if (!name || !question) {
    return;
}
//display a personalised sample response
result.hidden = false;
result.textContent = 
"Hello, " + name + "!\n\n" 
"Your question: " + question + "\n\n" 
"Welcome to Ai Frontend Helper. " 
"This is a demo response. To receive "
"real AI-generated answers, connect an AI service";
});
}